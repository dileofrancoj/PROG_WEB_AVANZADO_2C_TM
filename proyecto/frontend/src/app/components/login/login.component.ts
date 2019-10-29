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
      console.log(usr_ok);
      console.log(usr_ok.usuario.nombre);
      localStorage.setItem('usuario', usr_ok.JWT);
      localStorage.setItem('nombre', usr_ok.usuario.nombre)
      // console.log("Se guardo el token en el storage?");
      // console.log(localStorage.getItem('usuario'));
      // localStorage.clear();
      // console.log(localStorage.getItem('usuario'))
      // localStorage (los datos permancen hasta que se borre la sesion (forzado))
      // sessionStorage (los datos permancen hasta que se cierra la pestaña)
    } else {
      // usuario o contraseña incorrectos
    }
    this.form.reset();
  }

}
