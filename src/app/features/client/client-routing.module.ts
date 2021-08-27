import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from 'src/app/core/layout/basic-layout/basic-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('../client/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'protective',
        loadChildren: () => import('../client/protective-footwear/protective-footwear.module').then((m) => m.ProtectiveFootwearModule),
      },
      {
        path: 'medical',
        loadChildren: () => import('../client/medical-footwear/medical-footwear.module').then((m) => m.MedicalFootwearModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
