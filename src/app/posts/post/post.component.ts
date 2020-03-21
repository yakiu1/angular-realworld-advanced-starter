import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Article } from '../article';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  routerPara;
  articleContext: Article;
  constructor(private router: ActivatedRoute, private posrService: PostService) { }

  ngOnInit() {

    // 一種是subscribe
    this.router.paramMap.subscribe(para => {
      this.routerPara = para.get('id');
      this.posrService.getArticle(this.routerPara).subscribe(articleData => {
        this.articleContext = articleData.article;
      });

    });
    // 一種是快照
    console.log(this.router.snapshot.paramMap.get('id'));
  }

}
