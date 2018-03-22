import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global.services';
import { isUndefined } from 'util';
import { map } from 'rxjs/operator/map';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

constructor(private _http : Http) {}

fnLenguaje(lenguaje : string){

    var promise = new Promise((resolve, reject) => {
        //PASO #1 -> OBTENER LENGUAJE
        var lenguajeAlmacenado = localStorage.getItem('giftsByOptimisLanguage');
        //PASO #2 -> VALIDAR QUE EL LENGUAJE ALMACENADO NO ESTE VACIO
        if(lenguajeAlmacenado == 'undefined' || lenguajeAlmacenado == null){
            if(lenguaje == "" || lenguaje == undefined){
                lenguaje = "ES";
                localStorage.setItem('giftsByOptimisLanguage', lenguaje);
            }else{
                localStorage.setItem('giftsByOptimisLanguage', lenguaje);
            } 
        }else{
            if(lenguaje == "" || lenguaje == undefined){
                //NA
            }else{
                if(lenguajeAlmacenado != lenguaje){
                    localStorage.setItem('giftsByOptimisLanguage', lenguaje); 
                }
            }
            
        }
        lenguaje = localStorage.getItem('giftsByOptimisLanguage');
        resolve(lenguaje);
    });

    return promise;

}// --> ./fnLenguaje

fnItemsDelNavbar(){
    
    var promise = new Promise((resolve, reject) => {
        var items = [
            {itemES: "Inicio", itemEN: "Home", url: "/index"},
            /*
            {itemES: "Catálogo", itemEN: "Catalog", url: "/luxury" ,catalogItems: [
                { name: 'Miami', url: "catalogMiami"},
                { name: 'Costa Rica', url: "catalogCostaRica"},
                { name: 'Perú', url: "catalogPeru"},
                { name: 'Madrid', url: "catalogMadrid"},
                { name: 'Punta Cana', url: "catalogPuntaCana"}]},
                */
            {itemES: "Contáctenos", itemEN: "Contact Us", url: "/contact"}
        ]
        resolve(items);
    });
    return promise;
}// --> ./fnItemsDelNavbar

fnGetBestSellers(){
    var promise = new Promise((resolve, reject) => {
        var items = [
            {imageUrl: "../../assets/images/bestSellers/bestSeller1.jpg", familyEN: "Keychain", familyES: "Llavero", nameEN: "Madrid keychain", nameES: "Llavero de Madrid"},
            {imageUrl: "../../assets/images/bestSellers/bestSeller2.jpg", familyEN: "Cap", familyES: "Gorra", nameEN: "Surf Cap", nameES: "Gorra de Surf"},
        ]
        resolve(items);
    });
    return promise;
}

/*
exampleGET(){
    var route = GLOBAL.url+'getAllProperty';

    let headers = new Headers({
        'Content-Type' : 'application/json'
    });
    return this._http.get(route, {headers : headers}).map(res => res.json());
}

examplePOST(code: string){
    var route = GLOBAL.url+'getSingleProperty';
    var params = JSON.stringify({
        "code" : code,
    });
    let headers = new Headers({
        'Content-Type' : 'application/json'
    });
    return this._http.post(route, params, {headers : headers}).map(res => res.json()); 
}
*/

fnElCampoEstaVacio(data){
    
    if(data === null || data === undefined){
      return true;
    }
    var emptySpace = 0;
    for(var i =0; i < data.length; i++){
      if(data[i] != " "){
        emptySpace++
      }
    }
    if(emptySpace == 0 ){
      return true;
    }
    return false;
}// --> ./fnElCampoEstaVacio

fnFormatoDeCorreoCorrecto(emailField){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailField);
}// --> ./fnFormatoDeCorreoCorrecto


fnSendEmail(name: string, phone: string, email: string, message : string){
    var route = GLOBAL.urlEmail+'sendSingleEmail';
    var params = JSON.stringify({
        'dataClientTo' : 'info@giftsbyoptimis.com',
        'dataClientFrom' : 'noreplay@giftsbyoptimis.com',
        'dataClientSubject' : "Nuevo mensaje enviado desde el sitio web.",
        'dataReceivedName' : name,
        'dataReceivedPhone' : phone,
        'dataReceivedEmail' : email, 
        'dataReceivedMessage' : message
    });
    console.log(params);
    let headers = new Headers({
        'Content-Type' : 'application/json'
    });
    return this._http.post(route, params, {headers : headers}).map(res => res.json()); 
}// --> ./fnSendEmail

}// --> ./AppService
