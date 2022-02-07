import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SabermasComponent } from './paginas/sabermas/sabermas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'sabermas',
    component: SabermasComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'posts',
    loadChildren: () => import ("./paginas/posts/posts.module").then(m => m.PostsModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRutasModule { }
