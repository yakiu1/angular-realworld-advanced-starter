import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Article } from '../article';
import { Observable } from 'rxjs';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  routerPara;
  articleContext: Article;
  articleContext$: Observable<Article>;
  constructor(private router: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {

    // 一種是subscribe
    // this.router.paramMap.subscribe(para => {
    //   this.routerPara = para.get('id');
    //   this.postService.getArticle(this.routerPara).subscribe(articleData => {
    //     this.articleContext = articleData.article;
    //   });
    // });
    // 一種是快照
    // console.log(this.router.snapshot.paramMap.get('id'));

    this.articleContext$ = this.router.paramMap.pipe(
      map(param => param.get('id')),
      switchMap(id => this.postService.getArticle(id)),
      map(article => article.article));






  }

}
