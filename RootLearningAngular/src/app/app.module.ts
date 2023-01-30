import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { ProductoComponent } from './paginas/producto/producto.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegisterComponent } from './paginas/register/register.component';
import { CestaComponent } from './paginas/cesta/cesta.component';
import { BBuscadorComponent } from './componentes/busqueda/b-buscador/b-buscador.component';
import { PCabeceraComponent } from './componentes/producto/p-cabecera/p-cabecera.component';
import { RBotonesRRSSComponent } from './componentes/register/r-botones-rrss/r-botones-rrss.component';
import { RTituloComponent } from './componentes/register/r-titulo/r-titulo.component';
import { RFormComponent } from './componentes/register/r-form/r-form.component';
import { RLoginButtonComponent } from './componentes/register/r-login-button/r-login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BusquedaComponent,
    ProductoComponent,
    LoginComponent,
    RegisterComponent,
    CestaComponent,
    BBuscadorComponent,
    PCabeceraComponent,
    RBotonesRRSSComponent,
    RTituloComponent,
    RFormComponent,
    RLoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
