import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.page.html',
  styleUrls: ['./contenido.page.scss'],
})
export class ContenidoPage implements OnInit {

  id:any;
  sugencias: any;
  titulo: string;
  descripcion:string;
  image:string;
  idn:number;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private http:HttpClient,
    
  ) { }

  ngOnInit() {
  this.id= this.activatedRoute.snapshot.paramMap.get("id");
  this.idn= this.id-1;
  this.getSug().subscribe(res=>{
    this.sugencias=res;
    this.titulo= this.sugencias[this.idn].titulo;
    this.descripcion= this.sugencias[this.idn].descripcion;
    this.image= this.sugencias[this.idn].image;
   
  });
  }
  getSug(){
    return this.http
    .get("assets/file/sugerencias.json")
    .pipe(
    map((res:any) =>{
      return res.data;
    }))
  }

}
