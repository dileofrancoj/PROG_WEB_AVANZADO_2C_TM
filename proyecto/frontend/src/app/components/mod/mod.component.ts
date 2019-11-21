import { NavService } from './../../services/nav.service';
import { ModalManager } from 'ngb-modal';
import { Component, OnInit } from '@angular/core';
// Service, .ts (selectores)

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {
  modalR : any; 
  operacion : boolean; 
  constructor(private modalService : ModalManager, private navService : NavService) { }
  // ModalManager servicio 
  // modalService : instancia
  comprar() {
    console.log("compra")
    this.navService.carritoCargado$.emit(true);
  }

  cargar() {
    this.operacion = true;
    // post al server
    // respuesta del server
    // habilitamos boton
    // this.operacion = false;
    
  }

  ngOnInit() {
  }

  open(mod) {
    this.modalR = this.modalService.open(mod);
  }

}
