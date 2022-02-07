import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
// import { SabermasComponent } from './paginas/sabermas/sabermas.component';
// import { ContactoComponent } from './paginas/contacto/contacto.component';
// import { InicioComponent } from './paginas/inicio/inicio.component';
import { AppRutasModule } from './app-rutas.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginaModule } from './paginas/pagina.module';

@NgModule({
  declarations: [
    AppComponent,
    // SabermasComponent,
    // ContactoComponent,
    // InicioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule,
    PaginaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
