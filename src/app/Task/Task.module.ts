import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskPageRoutingModule } from './Task-routing.module';

import { TaskPage } from './Task.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TaskPageRoutingModule
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
