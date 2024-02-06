import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ServisService } from './servis.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-komponenta',
  templateUrl: './komponenta.component.html',
  styleUrls: ['./komponenta.component.css']
})
export class KomponentaComponent {

  products: any[]=[];
  
  constructor(private service: ServisService){
      this.service.doGet().subscribe((data: any) => {
        this.products = data;
      });
  }
  
  // ngOnInit() : void {
  //     this.products = this.service.doGet();
  // }
  // ngOnInit(){
  //   this.service.doGet().subscribe((data: any) => {
  //       this.products = data;
  //   }, (error) =>{
  //     console.error(error);
  //   });
  // }
  
  
  
}
