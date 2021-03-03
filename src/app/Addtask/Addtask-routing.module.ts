import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskPage } from './Addtask.page';

const routes: Routes = [
  {
    path: '',
    component: AddtaskPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddtaskPageRoutingModule {}
