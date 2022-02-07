import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SabermasComponent } from './sabermas/sabermas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    SabermasComponent,
    ContactoComponent,
    InicioComponent
  ],
  exports: [
    InicioComponent,
    ContactoComponent,
    SabermasComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PaginaModule { }
