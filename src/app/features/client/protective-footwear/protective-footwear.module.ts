import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectiveFootwearRoutingModule } from './protective-footwear-routing.module';
import { ProtectiveFootwearWrapperContainer } from './containers/protective-footwear-wrapper/protective-footwear-wrapper.container';


@NgModule({
  declarations: [
    ProtectiveFootwearWrapperContainer,
  ],
  imports: [
    CommonModule,
    ProtectiveFootwearRoutingModule
  ]
})
export class ProtectiveFootwearModule { }
