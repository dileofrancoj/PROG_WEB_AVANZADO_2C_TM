import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends BaseService{


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
}
