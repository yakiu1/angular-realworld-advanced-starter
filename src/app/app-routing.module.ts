import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { EditorComponent } from './posts/editor/editor.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
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
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
