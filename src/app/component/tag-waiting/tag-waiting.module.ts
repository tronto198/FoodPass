import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagWaitingComponent } from './tag-waiting.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TagWaitingComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    TagWaitingComponent
  ]
})
export class TagWaitingModule { }
