import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos : any [] = [];
  constructor(private productosServices : ProductosService, private router : Router) { }

  async ngOnInit() {
    // Acá cargamos los productos como peticion a nuestro backend
    // return this.http.get()
    let respuesta_server : any= await this.productosServices.getProductos(); // get base service
    // {
      // {status : 'ok' , data : []}
    //}
    if(respuesta_server.status === 'ok') {
      this.productos = respuesta_server.data;
    }
    // *ngFor="let p of productos"



  }

  navigate(id : number) {
    // cambiar la url (redirigir.. .)
    // localhost:4200/producto/1
      // producto/1/16
      // /producto /1
    this.router.navigate(['producto',id]);
    // this.router.navigateByUrl('/producto/' + id);
  }

}
