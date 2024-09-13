import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './page-a.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageAComponent],
  imports: [
    CommonModule, FormsModule
  ], exports: [PageAComponent]
})
export class PageAModule { }
