import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostsDetailsComponent} from "./components/posts-details/posts-details.component";

const routes: Routes = [
  {path:'', component:PostsComponent, children:[
      {path:':id', component:PostsDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
