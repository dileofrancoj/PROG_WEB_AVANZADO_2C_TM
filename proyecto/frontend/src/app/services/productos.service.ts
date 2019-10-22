import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService extends BaseService {

  getProductos() {
    // /productos
    try {

    this.setEndPoint('productos/1');
    return this.get();
    } catch(error) {

    }
  }

  getProducto(){
    //productos/1
  }



}
