import { UsuariosService } from './../../services/usuarios.service';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup
  constructor(private usuariosService : UsuariosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'mail' : new FormControl('', [Validators.required]),
      'password' : new FormControl('', [Validators.required])
    })
  }

 async login() {
    let usr_ok : any= await this.usuariosService.loginUsuario(this.form.value);
    if(usr_ok.status != 'invalid') {
      console.log(usr_ok.JWT)
    } else {
      // usuario o contraseña incorrectos
    }
  }

}
