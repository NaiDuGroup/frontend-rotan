import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalFootwearWrapperContainer } from './containers/medical-footwear-wrapper/medical-footwear-wrapper.container';

const routes: Routes = [
  {
    path: '',
    component: MedicalFootwearWrapperContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalFootwearRoutingModule { }
