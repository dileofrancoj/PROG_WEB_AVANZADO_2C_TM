import { Injectable, EventEmitter } from '@angular/core';
// EventEmitter --> RxJS (Microsfot : Reactive )

@Injectable({
  providedIn: 'root'
})
export class NavService {
  // EventEmitter
  // Emit
  // Escuche el evento
  carritoCargado$ = new EventEmitter<boolean>();   
  constructor() { }
}
