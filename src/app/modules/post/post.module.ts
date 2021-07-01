import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostsDetailsComponent } from './components/posts-details/posts-details.component';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostsDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers:[PostService]
})
export class PostModule { }
