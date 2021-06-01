import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {RouterModule, Routes} from "@angular/router";
import {FullUserComponent} from './components/full-user/full-user.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {PostCheckService} from "./services/post-check.service";
import {DeactivatorService} from "./services/deactivator.service";
import {PostResolverService} from "./services/post-resolver.service";
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { FullAlbumComponent } from './full-album/full-album.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: FullUserComponent},
  {path: 'posts', component: PostsComponent, canDeactivate: [DeactivatorService], resolve:{xxx:PostResolverService}},
  {path: 'posts/:id', component: FullPostComponent, canActivate: [PostCheckService],},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: FullAlbumComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent,
    FullPostComponent,
    AlbumsComponent,
    AlbumComponent,
    FullAlbumComponent
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
