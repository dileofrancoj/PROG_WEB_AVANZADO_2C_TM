import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  carritoCargado : boolean = false;
  constructor(private navbarService : NavbarService) { }

  ngOnInit() {
    this.navbarService.carritoCargado$.subscribe(estado => {
      if(estado) {
        this.carritoCargado = true;
      } else {
        this.carritoCargado = false;
      }
    })
  }

}
