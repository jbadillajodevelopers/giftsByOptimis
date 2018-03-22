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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [AppService]
})
export class ContactComponent implements OnInit {

  @ViewChild('infoModal') public infoModal;
  public lenguaje : string;
  public lenguajeEsIngles : boolean = false;
  public menuItems;
  public mensajeDeErrorEspaciosVacios : string;
  public mensajeDeErrorCorreo : string;
  public mensajeDeEnvioEN : string;
  public mensajeDeEnvioES : string;

  mostrarSpinner = false;
  

  mostrarPagina = false;

  constructor(private _AppService : AppService ) { 
    this.fnInicializacion();
  }

  ngOnInit() {

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

  fnValidarEspaciosVacios(data){
    var validacion : boolean;
    if(this._AppService.fnElCampoEstaVacio(data.value)){
      this.mensajeDeErrorEspaciosVacios = "*Campo obligatorio / Required";
      validacion = true;
    }else{
      validacion = false;
    }
    return validacion;
  }

  fnValidarCorreo(data){
    var validacion : boolean;
    if(!this._AppService.fnFormatoDeCorreoCorrecto(data.value)){
      this.mensajeDeErrorCorreo = "*Correo incorrecto / Incorrect email";
      validacion = true;
    }else{
      validacion = false;
    }
    return validacion;
  }

  onSubmit(f : NgForm){
    this.infoModal.show();
    this.mostrarSpinner = true;
    this.mensajeDeEnvioEN = "Sending the email...";
    this.mensajeDeEnvioES = "Enviando el correo...";
    this._AppService.fnSendEmail(f.value.frmName, f.value.frmEmail, f.value.frmPhone, f.value.frmMessage)
    .map(data => {
      console.log(data);
      this.mostrarSpinner = false;
      if(data.status){
        this.mensajeDeEnvioEN = "The email was send succesfully.";
        this.mensajeDeEnvioES = "El correo fue enviado correctamente.";
      }else{
        this.mensajeDeEnvioEN = "We have probles to send the email, please try again...";
        this.mensajeDeEnvioES = "Tenemos problemas con el envio de correos, favor intentar de nuevo.";
        console.log(data);
      }
    })
    .toPromise()
    .catch(err => {
      this.mostrarSpinner = false;
      this.mensajeDeEnvioEN = "We have probles to send the email, please try again...";
      this.mensajeDeEnvioES = "Tenemos problemas con el envio de correos, favor intentar de nuevo.";
      console.log(err)
  });
  }


}
