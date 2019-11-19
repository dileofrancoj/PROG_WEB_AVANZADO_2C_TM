import { environment } from './../../environments/environment.prod';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService{

  async uploadFile(obj) {
    this.setEndPoint('upload');
    return this.post(obj);
  }

  async postUsuario(obj) {
    try {
      this.setEndPoint('registro');
      return this.post(obj)
    } catch(error) {
      // error
    }
  }

  async loginUsuario(obj) {
    try {
      this.setEndPoint('auth/login');
      return this.post(obj);
    } catch(error) {
      throw  error;
    }
  }

  async getUsuario() {
    try {
      this.setEndPoint('usuarios');
      return this.get();
    } catch (error) {

    }
  }


  async putPassword(obj) {
    this.setEndPoint('usuarios/changepassword');
    return this.put(obj);
  }

  async putDatos(obj) {
    this.setEndPoint('usuarios/changedatos');
    return this.put(obj);
  }
}
