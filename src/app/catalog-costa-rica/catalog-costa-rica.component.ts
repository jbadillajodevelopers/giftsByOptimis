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
  selector: 'app-catalog-costa-rica',
  templateUrl: './catalog-costa-rica.component.html',
  styleUrls: ['./catalog-costa-rica.component.scss'],
  providers: [AppService]
})
export class CatalogCostaRicaComponent implements OnInit {

  @ViewChild('showImageModal') public showImageModal;
  public showImageModalImageUrl: string;
  public lenguaje : string;
  public lenguajeEsIngles : boolean = false;
  public menuItems;

  public canCoolersList;
  public cosmeticsList;
  public capsList;
  public magneticPencilsList;
  public keychainList;
  public bottlesOpenerList;
  public magneticMetal;
  public pursesList;
  public magneticTeddiesList;
  public braceletsList;
  public stickersList;



  mostrarPagina = false;

  constructor(private _AppService : AppService ) { 
    this.fnInicializacion();
  }

  ngOnInit() {
    this.canCoolersList = [
      {imageUrl: "../../assets/images/catalogoCR/CanCoolers/CC-01.png", code:"CC-01"},
      {imageUrl: "../../assets/images/catalogoCR/CanCoolers/CC-02.png", code:"CC-02"},
      {imageUrl: "../../assets/images/catalogoCR/CanCoolers/CC-08.png", code:"CC-08"},
      {imageUrl: "../../assets/images/catalogoCR/CanCoolers/CC-13.png", code:"CC-13"}
    ]

    this.cosmeticsList = [
      {imageUrl: "../../assets/images/catalogoCR/Cosmetiqueras/CN-01.png", code:"CN-01"},
      {imageUrl: "../../assets/images/catalogoCR/Cosmetiqueras/CN-03.png", code:"CN-03"}
    ]

    this.capsList = [
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Clasicas/GE-09.png", code:"GE-09"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Clasicas/GE-16.png", code:"GE-16"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Clasicas/GE-40.png", code:"GE-40"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Clasicas/GE-81.png", code:"GE-81"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/new/GE-22.png", code:"GE-22"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/new/GE-23.png", code:"GE-23"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/new/GE-24.png", code:"GE-24"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/new/GE-25.png", code:"GE-25"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/new/GE-27.png", code:"GE-27"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/new/GE-29.png", code:"GE-29"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/new/GE-30.png", code:"GE-30"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Surf/GE-03.png", code:"GE-03"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Surf/GE-07.png", code:"GE-07"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Surf/GE-13.png", code:"GE-13"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Surf/GE-14.png", code:"GE-14"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Surf/GE-69.png", code:"GE-69"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Surf/GE-69B.png", code:"GE-69B"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/Surf/GE-70.png", code:"GE-70"},

      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-82.png", code:"GE-82"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-83.png", code:"GE-83"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-84.png", code:"GE-84"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-85.png", code:"GE-85"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-86.png", code:"GE-86"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-88.png", code:"GE-88"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-91.png", code:"GE-91"},
      {imageUrl: "../../assets/images/catalogoCR/Gorras/last/GE-92.png", code:"GE-92"}
    ]

    this.magneticPencilsList = [
      {imageUrl: "../../assets/images/catalogoCR/LapicerosMagneticos/LM-01.png", code:"LM-01"},
      {imageUrl: "../../assets/images/catalogoCR/LapicerosMagneticos/LM-02.png", code:"LM-02"},
      {imageUrl: "../../assets/images/catalogoCR/LapicerosMagneticos/LM-03.png", code:"LM-03"},
      {imageUrl: "../../assets/images/catalogoCR/LapicerosMagneticos/LM-04.png", code:"LM-04"}
    ]

    this.keychainList = [
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-02.png", code:"LL-02"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-03.png", code:"LL-03"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-04.png", code:"LL-04"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-20.png", code:"LL-20"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-24.png", code:"LL-24"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-25.png", code:"LL-25"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-27.png", code:"LL-27"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-28.png", code:"LL-28"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-29.png", code:"LL-29"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-39.png", code:"LL-39"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-43.png", code:"LL-43"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-44.png", code:"LL-44"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-46.png", code:"LL-46"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-47.png", code:"LL-47"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-49.png", code:"LL-49"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-50.png", code:"LL-50"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-51.png", code:"LL-51"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-52.png", code:"LL-52"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-55.png", code:"LL-55"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-57.png", code:"LL-57"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-58.png", code:"LL-58"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-59.png", code:"LL-59"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-60.png", code:"LL-60"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-61.png", code:"LL-61"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosCadena/LL-62.png", code:"LL-62"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-02A.png", code:"DC-02A"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-02B.png", code:"DC-02B"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-03A.png", code:"DC-03A"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-03B.png", code:"DC-03B"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-04A.png", code:"DC-04A"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-04B.png", code:"DC-04B"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-05A.png", code:"DC-05A"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-05B.png", code:"DC-05B"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-06A.png", code:"DC-06A"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-06B.png", code:"DC-06B"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-07A.png", code:"DC-07A"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-07B.png", code:"DC-07B"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-08A.png", code:"DC-08A"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-08B.png", code:"DC-08B"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-09.png", code:"DC-09"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-10.png", code:"DC-10"},
      {imageUrl: "../../assets/images/catalogoCR/llaveros/LLaverosPVC/DC-11.png", code:"DC-11"}
      
    ]

    this.bottlesOpenerList = [
      {imageUrl: "../../assets/images/catalogoCR/MagnetoAbridor/ACR-01.png", code:"ACR-01"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetoAbridor/ACR-02.png", code:"ACR-02"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetoAbridor/ACR-03.png", code:"ACR-03"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetoAbridor/ACR-04.png", code:"ACR-04"}
    ]

    this.magneticMetal = [
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-03.png", code:"MCR-03"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-04.png", code:"MCR-04"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-05.png", code:"MCR-05"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-06.png", code:"MCR-06"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-07.png", code:"MCR-07"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-08.png", code:"MCR-08"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-09.png", code:"MCR-09"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-10.png", code:"MCR-10"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-11.png", code:"MCR-11"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/premium/MCR-12.png", code:"MCR-12"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/MCR-02.png", code:"MCR-02"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/MCR-13.png", code:"MCR-13"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/MCR-14.png", code:"MCR-14"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/MCR-15.png", code:"MCR-15"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/MM-09.png", code:"MM-09"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/MM-11.png", code:"MM-11"},
      {imageUrl: "../../assets/images/catalogoCR/MagnetosMetalicos/MM-12.png", code:"MM-12"},
    ]

    this.pursesList = [
      {imageUrl: "../../assets/images/catalogoCR/monederos/CN-02.png", code:"CN-02"},
      {imageUrl: "../../assets/images/catalogoCR/monederos/CN-04.png", code:"CN-04"},
      {imageUrl: "../../assets/images/catalogoCR/monederos/CN-05.png", code:"CN-05"},
      {imageUrl: "../../assets/images/catalogoCR/monederos/CN-06.png", code:"CN-06"},
      {imageUrl: "../../assets/images/catalogoCR/monederos/CN-07.png", code:"CN-07"},
      {imageUrl: "../../assets/images/catalogoCR/monederos/CN-08.png", code:"CN-08"}
    ]

    this.magneticTeddiesList = [
      {imageUrl: "../../assets/images/catalogoCR/PeluchesMagneticos/PL-02.png", code:"PL-02"},
      {imageUrl: "../../assets/images/catalogoCR/PeluchesMagneticos/PL-03.png", code:"PL-03"},
      {imageUrl: "../../assets/images/catalogoCR/PeluchesMagneticos/PL-06.png", code:"PL-06"},
      {imageUrl: "../../assets/images/catalogoCR/PeluchesMagneticos/PL-07.png", code:"PL-07"},
      {imageUrl: "../../assets/images/catalogoCR/PeluchesMagneticos/PL-08.png", code:"PL-08"}
    ]

    this.braceletsList = [
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/BZV-01.png", code:"BZV-01"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/BZV-02.png", code:"BZV-02"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/BZV-07.png", code:"BZV-07"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/BZV-07B.png", code:"BZV-07B"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/BZV-08.png", code:"BZV-08"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/BZV-08B.png", code:"BZV-08B"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/BZV-09.png", code:"BZV-09"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/PS-09.png", code:"PS-09"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCuero/PS-10.png", code:"PS-10"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroCorazon/PS-12.png", code:"PS-12"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroCorazon/PS-12NARANJA.png", code:"PS-12NARANJA"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroCorazon/PS-12ROJA.png", code:"PS-12ROJA"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroCorazon/PS-12ROSA.png", code:"PS-12ROSA"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroCorazon/PS-12TURQUESA.png", code:"PS-12TURQUESA"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroCorazon/PS-12VERDE.png", code:"PS-12VERDE"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-01.png", code:"PS-01"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-02.png", code:"PS-02"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-03.png", code:"PS-03"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-04.png", code:"PS-04"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-05.png", code:"PS-05"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-06.png", code:"PS-06"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-07.png", code:"PS-07"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasCueroSurf/PS-08.png", code:"PS-08"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasPITITAS/PC-01.png", code:"PC-01"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasPITITAS/PC-02.png", code:"PC-02"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasPITITAS/PC-03.png", code:"PC-03"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasPITITAS/PC-04.png", code:"PC-04"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasPITITAS/PC-05.png", code:"PC-05"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasPITITAS/PC-06.png", code:"PC-06"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasPITITAS/PC-07.png", code:"PC-07"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PIS-01.png", code:"PIS-01"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PIS-02.png", code:"PIS-02"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PIS-06.png", code:"PIS-06"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PIS-07.png", code:"PIS-07"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PIS-09.png", code:"PIS-09"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PIS-10.png", code:"PIS-10"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PMS-01.png", code:"PMS-01"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PMS-02.png", code:"PMS-02"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PMS-06.png", code:"PMS-06"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasSilver/PMS-08.png", code:"PMS-08"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasVintage/PCI-01.png", code:"PCI-01"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasVintage/PCI-02.png", code:"PCI-02"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasVintage/PCI-03.png", code:"PCI-03"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasVintage/PCI-06.png", code:"PCI-06"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasVintage/PCI-10.png", code:"PCI-10"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulserasVintage/PCI-11.png", code:"PCI-11"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulseraVintageMultiples/PCM-01.png", code:"PCM-01"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulseraVintageMultiples/PCM-02.png", code:"PCM-02"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulseraVintageMultiples/PCM-05.png", code:"PCM-05"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulseraVintageMultiples/PCM-07.png", code:"PCM-07"},
      {imageUrl: "../../assets/images/catalogoCR/Pulseras/PulseraVintageMultiples/PCM-08.png", code:"PCM-08"}
    ]

    this.stickersList = [
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-03.png", code:"ST-03"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-06.png", code:"ST-06"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-19.png", code:"ST-19"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-25.png", code:"ST-25"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-37.png", code:"ST-37"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-39.png", code:"ST-39"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-50.png", code:"ST-50"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-56.png", code:"ST-56"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-57.png", code:"ST-57"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-64.png", code:"ST-64"},
      {imageUrl: "../../assets/images/catalogoCR/Stickers/ST-65.png", code:"ST-65"}
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
