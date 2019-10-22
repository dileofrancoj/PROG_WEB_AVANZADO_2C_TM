import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  id_producto : any;
  producto : any [] = [];
  // /1
  // req.params.id
  constructor(private productosService : ProductosService, private activatedRoute : ActivatedRoute, private router : Router) { }
  // Router, ActivatedRoute
 async ngOnInit() {

    this.id_producto = this.activatedRoute.snapshot.params.id;
    // console.log(this.activatedRoute.snapshot)
    // console.log(this.activatedRoute.snapshot.params)
    // console.log(this.id_producto);
    let respuesta_server = await this.productosService.getProducto(this.id_producto);
    console.log(respuesta_server)

  }

}
