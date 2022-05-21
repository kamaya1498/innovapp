import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {
  sugencias: any = [];


  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit() {
    this.getGaleria().subscribe(res=>{
      this.sugencias=res;
    
    });
      console.log(this.sugencias)
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

