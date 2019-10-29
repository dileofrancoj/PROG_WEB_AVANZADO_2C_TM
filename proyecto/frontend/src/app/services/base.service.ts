import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url_server =  environment.url_server;
  endpoint = "";
  // headersGlobal : any = {}
  constructor(private http : HttpClient) { }

  getHttpOptions() {
    let httpHeadersOptions : any  = {}
    try {
      if(localStorage.getItem('usuario')){
        // content-type : 'application/json'
        // Authorization : sesion
        httpHeadersOptions = {
          headers : new HttpHeaders({
            'content-type' : 'application/json',
            Authorization : localStorage.getItem('usuario') // token
          })
        } 
      } else {
        httpHeadersOptions = {
          headers : new HttpHeaders({
            'content-type' : 'application/json'
          })
        }
      }
      return httpHeadersOptions;
    } catch(error) {
      console.log(error);
    }
  }

  setEndPoint(endpoint) {
    // defina el endpoint para hacer la peticion al REST
    this.endpoint = endpoint;
  }

  async get() {
    // este metodo devuelve la respuesta que envía el servidor en formato JSON
    try {
      const options : any = this.getHttpOptions(); // {headers : }
      return this.http.get(this.url_server + this.endpoint, options).toPromise();

    } catch(error) {
      throw error;
    }
  }

  async post(obj) {
    try {
      // http://localhost:3000/usuarios/1
      console.log(this.url_server + this.endpoint + "/"+environment.id_cliente);
      const options = this.getHttpOptions();
      return this.http.post(this.url_server + this.endpoint + "/" + environment.id_cliente  , obj, options).toPromise();
      
    } catch(error) {
      throw error;
    }
  }
  async put(obj) {
    try {
      // http://localhost:3000/usuarios/1
      console.log(this.url_server + this.endpoint + "/"+environment.id_cliente);
      const options = this.getHttpOptions();
      return this.http.put(this.url_server + this.endpoint + "/" + environment.id_cliente  , obj, options).toPromise();
      
    } catch(error) {
      throw error;
    }
  }
}
