import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import {map}from "rxjs/operators";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  fecha: string;
  sugencias:any =[];
  searchV: any;
  

  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  };

  constructor(public toastController: ToastController, private http:HttpClient) { 
    moment.locale('es-mx');
    
    

  }

  ngOnInit() {
    this.getSug().subscribe(res=>{
      this.sugencias=res;
      this.searchV=this.sugencias;
    });
  }

  cargarEntradas(){
    var fecha = moment(this.fecha).format('DD-MM-YY');

    this.entradas = JSON.parse(localStorage.getItem('entradas'));
    if(this.entradas){
      var entradaActual = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(entradaActual){
        this.entradaActual = entradaActual;
      }else{
        this.inicializarNuevaEntrada();
      }
    }else{
      this.inicializarNuevaEntrada();
    }
  }

  inicializarNuevaEntrada(){
    var fecha = moment(this.fecha).format('DD-MM-YY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MMMM');
    var year = moment(this.fecha).format('YYYY');

    this.entradaActual = {
      fechaTexto: dia + ' de ' + mes + ' del ' +  year,
      fecha: fecha,
      texto: ''
    }
  }

  async guardar(entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }){

    var fecha = moment(this.fecha).format('DD-MM-YY');

    if(this.entradas){
      var item = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(item){
        localStorage.setItem('entradas',JSON.stringify(this.entradas));
      }else{
        this.guardarItem(entradaActual);
      }

    }else{
      this.entradas = [];
      this.guardarItem(entradaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  guardarItem(entrada:{fecha: string,fechaTexto: string,texto: string }){
    this.entradas.push(entrada);
    localStorage.setItem('entradas',JSON.stringify(this.entradas));
  }
  getSug(){
    return this.http
    .get("assets/file/sugerencias.json")
    .pipe(
    map((res:any) =>{
      return res.data;
    }))
  }
  search(event){
    const texto= event.target.value;
    this.searchV=this.sugencias;
    if(texto && texto.trim() != ''){
      this.searchV= this.searchV.filter((suge:any)=>{
        return(suge.titulo.toLowerCase().indexOf(texto.toLowerCase())>-1);
      })
    }
  }

}

