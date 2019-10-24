import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url_server =  environment.url_server;
  endpoint = "";
  constructor(private http : HttpClient) { }

  setEndPoint(endpoint) {
    // defina el endpoint para hacer la peticion al REST
    this.endpoint = endpoint;
  }

  async get() {
    // este metodo devuelve la respuesta que envía el servidor en formato JSON
    try {
      return this.http.get(this.url_server + this.endpoint).toPromise();

    } catch(error) {
      throw error;
    }
  }

  async post(obj) {
    try {
      // http://localhost:3000/usuarios/1
      console.log(this.url_server + this.endpoint + "/"+environment.id_cliente);
      return this.http.post(this.url_server + this.endpoint + "/" + environment.id_cliente  , obj).toPromise();
      
    } catch(error) {
      throw error;
    }
  }
}
