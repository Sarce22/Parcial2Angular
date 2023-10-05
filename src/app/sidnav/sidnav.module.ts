import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidnavRoutingModule } from './sidnav-routing.module';
import { SidnavComponent } from './sidnav.component';


@NgModule({
  declarations: [SidnavComponent],
  imports: [
    CommonModule,
    SidnavRoutingModule
  ],exports:[SidnavComponent]
})
export class SidnavModule { }
