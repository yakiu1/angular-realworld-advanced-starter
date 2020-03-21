import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, HttpClientModule, LayoutModule, PostsModule,
    AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
