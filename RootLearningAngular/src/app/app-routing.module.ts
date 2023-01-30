import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./paginas/home/home.component";
import { BusquedaComponent} from "./paginas/busqueda/busqueda.component";
import { ProductoComponent} from "./paginas/producto/producto.component";
import {LoginComponent} from "./paginas/login/login.component";
import { RegisterComponent} from "./paginas/register/register.component";
import { CestaComponent} from "./paginas/cesta/cesta.component";

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path:"busqueda",component:BusquedaComponent},
  {path: "producto", component:ProductoComponent},
  {path: "login", component:LoginComponent},
  {path: "regitro", component:RegisterComponent},
  {path:"cesta",component:CestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
