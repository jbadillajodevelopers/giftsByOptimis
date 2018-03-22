import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CurrencyPipe } from '@angular/common';
import { ElementRef, Renderer2 } from '@angular/core';

import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppService } from '../services/app.services';
import { GLOBAL } from '../services/global.services'

@Component({
  selector: 'app-catalog-madrid',
  templateUrl: './catalog-madrid.component.html',
  styleUrls: ['./catalog-madrid.component.scss'],
  providers: [AppService]
})
export class CatalogMadridComponent implements OnInit {

  @ViewChild('showImageModal') public showImageModal;
  public showImageModalImageUrl: string;
  public lenguaje : string;
  public lenguajeEsIngles : boolean = false;
  public menuItems;


  public braceletsList;
  public keychainList;
  public magneticsList;
  public stickersList;

  mostrarPagina = false;

  constructor(private _AppService : AppService ) { 
    this.fnInicializacion();
  }

  ngOnInit() {

    this.braceletsList =[
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-01.png", code:"BE-01"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-02.png", code:"BE-02"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-05.png", code:"BE-05"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-06.png", code:"BE-06"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-07.png", code:"BE-07"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-08.png", code:"BE-08"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-10.png", code:"BE-10"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/BE-11.png", code:"BE-11"},
      {imageUrl: "../../assets/images/catalogoMa/Brazaletes/CE-02.png", code:"CE-02"}
    ]
    this.keychainList = [
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-01.png", code:"LLM-01"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-03.png", code:"LLM-03"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-04.png", code:"LLM-04"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-05.png", code:"LLM-05"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-06.png", code:"LLM-06"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-07.png", code:"LLM-07"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-08.png", code:"LLM-08"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-09.png", code:"LLM-09"},
      {imageUrl: "../../assets/images/catalogoMa/Llaveros/LLE-10.png", code:"LLM-10"}
    ]

    this.magneticsList = [
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-01.png", code:"MME-01"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-02.png", code:"MME-02"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-03.png", code:"MME-03"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-04.png", code:"MME-04"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-05.png", code:"MME-05"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-06.png", code:"MME-06"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-07.png", code:"MME-07"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MME-09.png", code:"MME-09"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MagnetosAbreBotellas/MAE-01.png", code:"MAE-01"},
      {imageUrl: "../../assets/images/catalogoMa/MAGNETOS/MagnetosAbreBotellas/MAE-02.png", code:"MAE-02"}
    ]
    this.stickersList = [
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-01.png", code:"STE-01"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-02.png", code:"STE-02"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-03.png", code:"STE-03"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-04.png", code:"STE-04"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-05.png", code:"STE-05"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-06.png", code:"STE-06"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-07.png", code:"STE-07"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-08.png", code:"STE-08"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-09.png", code:"STE-09"},
      {imageUrl: "../../assets/images/catalogoMa/Stickers/STE-10.png", code:"STE-10"}
    ]
  }

  fnLenguaje(lenguaje : string){
    try{
      this._AppService.fnLenguaje(lenguaje).then(
        (val) => {
          this.lenguaje = String(val);
          if(this.lenguaje == "EN"){
            this.lenguajeEsIngles = true;
          }else{
            this.lenguajeEsIngles = false;
          }
        },
        (err) => console.error(err)
      );

    }catch(ex){
      console.log(ex)
    }
  }

  fnInicializacion(){
    try{
      //CONFIGURAMOS EL MENU
      this._AppService.fnItemsDelNavbar().then(
        (val)=>{
          console.log(val);
          this.menuItems = val;
        },
        (err) => console.error(err)
      );
      //CONFIGURAMOS EL LENGUAJE
      this._AppService.fnLenguaje(this.lenguaje).then(
        (val) => {
          this.lenguaje = String(val);
          if(this.lenguaje == "EN"){
            this.lenguajeEsIngles = true;
          }else{
            this.lenguajeEsIngles = false;
          }
          this.mostrarPagina = true;
        },
        (err) => console.error(err)
      );

    }catch(ex){
      console.log(ex)
    }
  }

  fnShowImage(item){
    this.showImageModalImageUrl = item.imageUrl;
    this.showImageModal.show();
  }

}
