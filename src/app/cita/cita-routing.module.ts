import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes: Routes = [
  {
    path:'', component: ListarComponent
  },
  {
    path:'agregar',component:AgregarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
