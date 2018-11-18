import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostsServices } from './posts/posts.services';
import { UsersServices } from './users/users.services';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form.component';
import { SpinnerComponent } from './common/spinner.component';
import { PaginationComponent } from './common/pagination.component';
import { NotFoundComponent } from './common/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    UsersComponent,
    SpinnerComponent,
    PaginationComponent, 
    UserFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule, ROUTING, ReactiveFormsModule, HttpClientModule
  ],
  providers: [PostsServices, UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule {}
