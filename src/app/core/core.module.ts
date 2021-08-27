import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BasicLayoutComponent } from './layout/basic-layout/basic-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BasicLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
