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
import { GLOBAL } from '../services/global.services';

@Component({
  selector: 'app-catalog-miami',
  templateUrl: './catalog-miami.component.html',
  styleUrls: ['./catalog-miami.component.scss'],
  providers: [AppService]
})
export class CatalogMiamiComponent implements OnInit {

  @ViewChild('showImageModal') public showImageModal;
  public showImageModalImageUrl: string;
  public lenguaje : string;
  public lenguajeEsIngles : boolean = false;
  public menuItems;

  public keychainList;
  public charmsList;

  mostrarPagina = false;

  constructor(private _AppService : AppService ) { 
    this.fnInicializacion();
  }

  ngOnInit() {
    this.keychainList = [
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-01.jpg", code:"LLM-01"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-02.jpg", code:"LLM-02"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-03.jpg", code:"LLM-03"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-04.jpg", code:"LLM-04"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-05.jpg", code:"LLM-05"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-06.jpg", code:"LLM-06"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-07.jpg", code:"LLM-07"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-08.jpg", code:"LLM-08"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-09.jpg", code:"LLM-09"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-10.jpg", code:"LLM-10"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-11.jpg", code:"LLM-11"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-12.jpg", code:"LLM-12"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-13.jpg", code:"LLM-13"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-14.jpg", code:"LLM-14"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-15.jpg", code:"LLM-15"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-16.jpg", code:"LLM-16"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-17.jpg", code:"LLM-17"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-18.jpg", code:"LLM-18"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-19.jpg", code:"LLM-19"},
      {imageUrl: "../../assets/images/catalogoMi/llaveros/LLM-20.jpg", code:"LLM-20"}
    ]

    this.charmsList = [
      {imageUrl: "../../assets/images/catalogoMi/dijes/DMI-A.jpg", code:"DMI-A"},
      {imageUrl: "../../assets/images/catalogoMi/dijes/DMI-B.jpg", code:"DMI-B"},
      {imageUrl: "../../assets/images/catalogoMi/dijes/DMI-C.jpg", code:"DMI-C"},
      {imageUrl: "../../assets/images/catalogoMi/dijes/DMI-D.jpg", code:"DMI-D"},
      {imageUrl: "../../assets/images/catalogoMi/dijes/DMI-E.jpg", code:"DMI-E"},
      {imageUrl: "../../assets/images/catalogoMi/dijes/DMI-F.jpg", code:"DMI-F"},
      {imageUrl: "../../assets/images/catalogoMi/dijes/DMI-G.jpg", code:"DMI-G"}
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
