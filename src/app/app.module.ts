import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


let routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailComponent}
    ]
  },
  {path: 'posts', component: PostsComponent,
  children:[
    {path: ':id', component: PostDetailComponent}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
