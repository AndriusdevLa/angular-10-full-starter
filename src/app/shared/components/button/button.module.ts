import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    LoaderModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
