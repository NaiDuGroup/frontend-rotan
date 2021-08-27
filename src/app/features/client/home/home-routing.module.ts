import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWrapperContainer } from './containers/home-wrapper/home-wrapper.container';

const routes: Routes = [
  {
    path: '',
    component: HomeWrapperContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
