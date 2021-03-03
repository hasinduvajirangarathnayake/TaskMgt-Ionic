import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPage } from './Task.page';

const routes: Routes = [
  {
    path: 'task',
    component: TaskPage,
    children: [
      {
        path: 'addtask',
        loadChildren: () => import('../Addtask/Addtask.module').then(m => m.AddtaskPageModule)
      },
      {
        path: 'alltask',
        loadChildren: () => import('../Alltask/Alltask.module').then(m => m.AlltaskPageModule)
      },
      {
        path: '',
        redirectTo: '/task/addtask',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/task/addtask',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TaskPageRoutingModule {}
