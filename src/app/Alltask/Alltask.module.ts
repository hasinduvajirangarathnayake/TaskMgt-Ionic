import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlltaskPage } from './Alltask.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AlltaskPageRoutingModule } from './Alltask-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AlltaskPageRoutingModule,
    
   ReactiveFormsModule,
   HttpClientModule,
  ],
  declarations: [AlltaskPage]
})
export class AlltaskPageModule {}
