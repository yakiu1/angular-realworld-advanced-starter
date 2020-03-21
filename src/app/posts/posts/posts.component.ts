import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Articles, Article } from '../article';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  articles: Article[];
  articles$: Observable<Article[]>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.postService.getArticles().subscribe(articleData => {
    //   this.articles = articleData.articles;
    //   console.log(this.articles);
    // });
    this.articles$ = this.postService.getArticles().pipe(map(m => m.articles), share());
  }

}
