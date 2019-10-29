import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},

  {path : 'productos', component : ProductosComponent},
  {path : 'producto/:id', component : ProductoComponent},
  {path : 'registro', component : RegistroComponent},
  {path : 'login', component : LoginComponent},
  {path : 'perfil',  component : PerfilComponent},
  {path : '**', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
