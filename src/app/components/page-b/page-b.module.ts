import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBComponent } from './page-b.component';



@NgModule({
  declarations: [PageBComponent],
  imports: [
    CommonModule
  ], exports: [PageBComponent]
})
export class PageBModule { }
