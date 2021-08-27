import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectiveFootwearWrapperContainer } from './containers/protective-footwear-wrapper/protective-footwear-wrapper.container';

const routes: Routes = [
  {
    path: '',
    component: ProtectiveFootwearWrapperContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectiveFootwearRoutingModule { }
