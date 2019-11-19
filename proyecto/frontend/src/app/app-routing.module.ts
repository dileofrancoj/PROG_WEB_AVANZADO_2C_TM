import { UploadComponent } from './components/upload/upload.component';
import { AuthGuard } from './auth.guard';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},

  {path : 'productos', component : ProductosComponent},
  {path : 'producto/:id', component : ProductoComponent},
  {path : 'registro', component : RegistroComponent},
  {path : 'login', component : LoginComponent},
  {path : 'perfil', canActivate : [AuthGuard] , component : PerfilComponent},
  {path : 'upload', component : UploadComponent},
  {path : 'lazy', loadChildren : './components/lazy/lazy.module#LazyModule', canActivate : [AuthGuard]},  
  {path : '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 