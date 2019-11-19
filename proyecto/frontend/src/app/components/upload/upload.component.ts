import { UploadService } from './../../services/upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  comentario : string = '';
  selectedFile = null;
  provincias : any [] = ['Sf', 'Cm'];
  provinciaElegida : string = '0';
  constructor(private upload : UploadService) { }

  onFileSelected(valor) { 
    console.log(valor);
    // en caso que sea solo una imagen (<input type='file'> )
    this.selectedFile = valor.target.files[0];
    // {IMAGEN}
  }

  async subir() {
    // paquete de datos
    const fd = new FormData();
    // append('key','valor')
    // req.body.comentario
    // {key : 'value'}
    fd.append('comentario', this.comentario);
    // 'file', imagen, 'dni.jpg'
    fd.append('file',this.selectedFile, this.selectedFile.name);
    fd.append('provincia',this.provinciaElegida)

    let rta = await this.upload.postData(fd);
    console.log(rta);
  }

  select(val) {
    console.log(val);
    this.provinciaElegida = val;
  }

  ngOnInit() {

      // get de todos los productos
      // app.miproyecto.com.ar/images/
      
    }

}

