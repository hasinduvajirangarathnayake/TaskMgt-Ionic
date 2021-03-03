import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtaskPage } from './Addtask.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AddtaskPageRoutingModule } from './Addtask-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AddtaskPageRoutingModule,
    
   ReactiveFormsModule,
   HttpClientModule,
  ],
  declarations: [AddtaskPage]
})
export class AddtaskPageModule {}
