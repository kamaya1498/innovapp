import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contenido-galeria',
  templateUrl: './contenido-galeria.page.html',
  styleUrls: ['./contenido-galeria.page.scss'],
})
export class ContenidoGaleriaPage implements OnInit {

  id:any;
  galeria: any;
  titulo: string;
  descripcion:string;
  image:string;
  idn:number;

  constructor(private activatedRoute:ActivatedRoute,
    private http:HttpClient,) { }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
  this.idn= this.id-1;
  this.getGaleria().subscribe(res=>{
    this.galeria=res;
    this.titulo= this.galeria[this.idn].titulo;
    this.descripcion= this.galeria[this.idn].descripcion;
    this.image= this.galeria[this.idn].image;
   
  });
  }
  getGaleria(){
    return this.http
    .get("assets/file/galeria.json")
    .pipe(
    map((res:any) =>{
      return res.data;
    }))
  }

}
