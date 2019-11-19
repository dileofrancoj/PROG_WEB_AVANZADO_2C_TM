import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

// {path : 'perfil', Guardian, component : Componente}

export class AuthGuard implements CanActivate{
    constructor(private router : Router) {}
    canActivate() : boolean {
        if(localStorage.getItem('usuario')) {
            return true;
        } else {
            this.router.navigate(['/'])
        }
    }
    
        

}