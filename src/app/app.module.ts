import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

let routes: Routes = [
  {path: 'users', loadChildren:()=> import('./modules/user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren:()=> import('./modules/post/post.module').then(m => m.PostModule)},
  {path: 'comments', loadChildren:()=> import('./modules/comment/comment.module').then(m => m.CommentModule)},
];

@NgModule({
  declarations: [
    AppComponent
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
