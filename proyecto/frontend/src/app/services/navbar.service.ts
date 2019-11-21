import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  carritoCargado$ = new EventEmitter<boolean>();
  constructor() { }
}
