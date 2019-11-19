import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService extends BaseService {

  postData(obj) {
    try {
      // upload/id_cliente
      this.setEndPoint('upload');
      // http://localhost:300/upload/1
      return this.post(obj);
    } catch(error) {
      throw error;
    }
  }
}
