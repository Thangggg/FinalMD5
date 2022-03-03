import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./book-module/list/list.component";
import {CreateComponent} from "./book-module/create/create.component";
import {DetailComponent} from "./book-module/detail/detail.component";
import {EditComponent} from "./book-module/edit/edit.component";



const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
