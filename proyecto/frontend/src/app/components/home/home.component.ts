import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos : any [] = [];
  constructor(private productosServices : ProductosService) { }

  async ngOnInit() {
    // Acá cargamos los productos como peticion a nuestro backend
    // return this.http.get()
    let respuesta_server : any= await this.productosServices.getProductos(); // get base service
    // {
      // {status : 'ok' , data : []}
    //}
    if(respuesta_server.status === 'ok') {
      this.productos = respuesta_server.data;
      console.log(this.productos);
    }
    // *ngFor="let p of productos"



  }

}
