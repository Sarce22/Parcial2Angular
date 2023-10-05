import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],exports:[
    ListarComponent
  ]
})
export class CitaModule { }
