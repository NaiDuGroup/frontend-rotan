import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalFootwearRoutingModule } from './medical-footwear-routing.module';
import { MedicalFootwearWrapperContainer } from './containers/medical-footwear-wrapper/medical-footwear-wrapper.container';


@NgModule({
  declarations: [
    MedicalFootwearWrapperContainer,
  ],
  imports: [
    CommonModule,
    MedicalFootwearRoutingModule
  ]
})
export class MedicalFootwearModule { }
