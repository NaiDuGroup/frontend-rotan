import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full',
  },
  {
    path: 'client',
    loadChildren: () => import('./features/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '**',
    redirectTo: 'client',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
