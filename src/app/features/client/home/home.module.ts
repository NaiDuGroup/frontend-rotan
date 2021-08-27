import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeWrapperContainer } from './containers/home-wrapper/home-wrapper.container';


@NgModule({
  declarations: [
    HomeWrapperContainer,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
