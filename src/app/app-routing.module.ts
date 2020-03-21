import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { EditorComponent } from './posts/editor/editor.component';

const routes: Routes = [{
  path: 'main', component: MainComponent,
  children: [{
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'create', component: EditorComponent }
  ]
},
{ path: 'login', component: LoginComponent },
{ path: '', pathMatch: 'full', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
