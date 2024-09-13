import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAModule } from './components/page-a/page-a.module';
import { PageBModule } from './components/page-b/page-b.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageAModule,
    PageBModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PageAModule, PageBModule]
})
export class AppModule { }
