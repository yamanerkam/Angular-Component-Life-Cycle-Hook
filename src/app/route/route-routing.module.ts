import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBComponent } from '../components/page-b/page-b.component';

const routes: Routes = [
  { path: 'b', component: PageBComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
