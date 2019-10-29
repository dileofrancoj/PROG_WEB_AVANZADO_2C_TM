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
  constructor(private router : Router) { }

  ngOnInit() {
    if(localStorage.getItem('usuario') != null) {
      this.nombre = localStorage.getItem('nombre');
      this.login = true;
    } else {
      this.login = false;
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
