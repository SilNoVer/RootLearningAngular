import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuInfoPrincipalComponent } from './paginas/curso/cu-info-principal/cu-info-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    CuInfoPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
