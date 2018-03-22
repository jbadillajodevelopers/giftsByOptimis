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
  selector: 'app-catalog-peru',
  templateUrl: './catalog-peru.component.html',
  styleUrls: ['./catalog-peru.component.scss'],
  providers: [AppService]
})
export class CatalogPeruComponent implements OnInit {

  @ViewChild('showImageModal') public showImageModal;
  public showImageModalImageUrl: string;
  public lenguaje : string;
  public lenguajeEsIngles : boolean = false;
  public menuItems;

  public keychainList;

  mostrarPagina = false;

  constructor(private _AppService : AppService ) { 
    this.fnInicializacion();
  }

  ngOnInit() {
    this.keychainList = [
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-22.png", code:"LL-22"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-23.png", code:"LL-23"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-24.png", code:"LL-24"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-25.png", code:"LL-25"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-26.png", code:"LL-26"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-28.png", code:"LL-28"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-30.png", code:"LL-30"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-31.png", code:"LL-31"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-33.png", code:"LL-33"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-34.png", code:"LL-34"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-35.png", code:"LL-35"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-40.png", code:"LL-40"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/LL-44.png", code:"LL-44"},

      {imageUrl: "../../assets/images/catalogPe/LLaveros/A/1.png", code:"A-01"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/A/2.png", code:"A-02"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/A/3.png", code:"A-03"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/A/4.png", code:"A-04"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/A/5.png", code:"A-05"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/A/6.png", code:"A-06"},

      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/1.png", code:"B-01"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/2.png", code:"B-02"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/3.png", code:"B-03"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/4.png", code:"B-04"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/5.png", code:"B-05"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/6.png", code:"B-06"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/7.png", code:"B-07"},
      {imageUrl: "../../assets/images/catalogPe/LLaveros/B/8.png", code:"B-08"}
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
