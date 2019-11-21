import { NavService } from './../../services/nav.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login : boolean;
  nombre : string = '';
  carritoCargado : boolean;
  constructor(private router : Router, private navService : NavService) { }

  ngOnInit() {
    this.navService.carritoCargado$.subscribe(dato => {
      if(dato) {
        this.carritoCargado = true;
      } else {
        this.carritoCargado = false;
      }
    })
    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');
      this.login = true;
    } else {
    }
  }
  logout() {
    console.log("entro a logout");
    localStorage.clear();
    this.login = false;
    this.router.navigate(['home'])
    // location.reload();
  }

}
