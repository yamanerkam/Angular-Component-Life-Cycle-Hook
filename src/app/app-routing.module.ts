import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageAComponent } from './components/page-a/page-a.component';

const routes: Routes = [
  { path: '', component: PageAComponent },
  { path: 'b', component: PageBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
