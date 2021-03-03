import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltaskPage } from './Alltask.page';

const routes: Routes = [
  {
    path: '',
    component: AlltaskPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlltaskPageRoutingModule {}
