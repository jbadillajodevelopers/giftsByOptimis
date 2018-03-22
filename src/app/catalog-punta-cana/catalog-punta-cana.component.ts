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
  selector: 'app-catalog-punta-cana',
  templateUrl: './catalog-punta-cana.component.html',
  styleUrls: ['./catalog-punta-cana.component.scss'],
  providers: [AppService]
})
export class CatalogPuntaCanaComponent implements OnInit {

  @ViewChild('showImageModal') public showImageModal;
  public showImageModalImageUrl: string;
  public lenguaje : string;
  public lenguajeEsIngles : boolean = false;
  public menuItems;

  public canCoolersList;
  public cosmeticsList;
  public keychainList;
  public magneticMetal;
  public pursesList;
  public braceletsList;

  mostrarPagina = false;

  constructor(private _AppService : AppService ) { 
    this.fnInicializacion();
  }

  ngOnInit() {

    this. canCoolersList = [
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-01.png", code:"CPC-01"},
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-02.png", code:"CPC-02"},
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-03.png", code:"CPC-03"},
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-04.png", code:"CPC-04"},
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-06.png", code:"CPC-06"},
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-08.png", code:"CPC-08"},
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-09.png", code:"CPC-09"},
      {imageUrl: "../../assets/images/catalogoRD/CanCoolers/CPC-10.png", code:"CPC-10"}
    ]
    this.cosmeticsList= [
      {imageUrl: "../../assets/images/catalogoRD/CosmetiquerasNeopreno/CNPC-01.png", code:"CNPC-01"},
      {imageUrl: "../../assets/images/catalogoRD/CosmetiquerasNeopreno/CNPC-03.png", code:"CNPC-03"},
      {imageUrl: "../../assets/images/catalogoRD/CosmetiquerasNeopreno/CNPC-04.png", code:"CNPC-04"},
      {imageUrl: "../../assets/images/catalogoRD/CosmetiquerasNeopreno/CNPC-05.png", code:"CNPC-05"},
      {imageUrl: "../../assets/images/catalogoRD/CosmetiquerasNeopreno/CNPC-06.png", code:"CNPC-06"},
      {imageUrl: "../../assets/images/catalogoRD/CosmetiquerasNeopreno/CNPC-07.png", code:"CNPC-07"}
    ]
    this.keychainList = [
      {imageUrl: "../../assets/images/catalogoRD/LlaverosPVC/DCPC-02.png", code:"DCPC-02"},
      {imageUrl: "../../assets/images/catalogoRD/LlaverosPVC/DCPC-04.png", code:"DCPC-04"},
      {imageUrl: "../../assets/images/catalogoRD/LlaverosPVC/DCPC-05.png", code:"DCPC-05"},
      {imageUrl: "../../assets/images/catalogoRD/LlaverosPVC/DCPC-06.png", code:"DCPC-06"},
      {imageUrl: "../../assets/images/catalogoRD/LlaverosPVC/DCPC-08.png", code:"DCPC-08"},
      {imageUrl: "../../assets/images/catalogoRD/LlaverosPVC/DCPC-10.png", code:"DCPC-10"},

      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-01.png", code:"LPC-01"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-02.png", code:"LPC-02"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-04.png", code:"LPC-04"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-05.png", code:"LPC-05"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-06.png", code:"LPC-06"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-07.png", code:"LPC-07"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-08.png", code:"LPC-08"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-09.png", code:"LPC-09"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-10.png", code:"LPC-10"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-12.png", code:"LPC-12"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-13.png", code:"LPC-13"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-19.png", code:"LPC-19"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-20.png", code:"LPC-20"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-21.png", code:"LPC-21"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-23.png", code:"LPC-23"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-24.png", code:"LPC-24"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-25.png", code:"LPC-25"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-26.png", code:"LPC-26"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-27.png", code:"LPC-27"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-28.png", code:"LPC-28"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-29.png", code:"LPC-29"},
      {imageUrl: "../../assets/images/catalogoRD/LLaverosMetal/LPC-30.png", code:"LPC-30"}
    ]
    this.magneticMetal = [
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-01.png", code:"MPC-01"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-02.png", code:"MPC-02"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-03.png", code:"MPC-03"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-04.png", code:"MPC-04"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-05.png", code:"MPC-05"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-06.png", code:"MPC-06"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-07.png", code:"MPC-07"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-08.png", code:"MPC-08"},
      {imageUrl: "../../assets/images/catalogoRD/MagnetosMetal/MPC-13.png", code:"MPC-13"}
    ]

    this.pursesList = [
      {imageUrl: "../../assets/images/catalogoRD/MonederosNeoprene/MNPC-01.png", code:"MNPC-01"},
      {imageUrl: "../../assets/images/catalogoRD/MonederosNeoprene/MNPC-02.png", code:"MNPC-02"},
      {imageUrl: "../../assets/images/catalogoRD/MonederosNeoprene/MNPC-03.png", code:"MNPC-03"},
      {imageUrl: "../../assets/images/catalogoRD/MonederosNeoprene/MNPC-04.png", code:"MNPC-04"},
      {imageUrl: "../../assets/images/catalogoRD/MonederosNeoprene/MNPC-05.png", code:"MNPC-05"},
      {imageUrl: "../../assets/images/catalogoRD/MonederosNeoprene/MNPC-06.png", code:"MNPC-06"}
    ]

    this.braceletsList=[
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana1/BPC-03.png", code:"BPC-03"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana1/BPC-04.png", code:"BPC-04"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana1/BPC-05.png", code:"BPC-05"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana1/BPC-06.png", code:"BPC-06"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana1/BPC-07.png", code:"BPC-07"},

      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-09.png", code:"BPC-09"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-10.png", code:"BPC-10"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-11.png", code:"BPC-11"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-12.png", code:"BPC-12"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-13.png", code:"BPC-13"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-14.png", code:"BPC-14"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-15.png", code:"BPC-15"},
      {imageUrl: "../../assets/images/catalogoRD/PulserasPuntaCana2/BPC-16.png", code:"BPC-16"}
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
