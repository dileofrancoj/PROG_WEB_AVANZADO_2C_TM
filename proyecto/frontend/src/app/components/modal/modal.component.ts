import { NavbarService } from './../../services/navbar.service';
import { Component, OnInit } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private modalRef;
  operacion : boolean = false;
  constructor(private modalService : ModalManager, private navbarService : NavbarService) { }

  ngOnInit() {
  }
  open(modal){
    this.modalRef = this.modalService.open(modal)
  }

  accion() {
    this.operacion = true;

    // this.operacion = false;
  }

  comprar() {
    this.navbarService.carritoCargado$.emit(true);
  }

}
