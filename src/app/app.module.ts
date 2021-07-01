//lesson 1
// Создать несколько массивов с объектами.
// Создать для каждого из  массивов компонент, который отрисовывает все объекты.
// для отрисовки каждого отдельного объекта создать свой компонент.
// Вывести все объекты в UI
//
//выводите всех юзеров, под каждым юзером его посты (все разделяете на компоненты, делаете сервисы и интерфейсы)

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
