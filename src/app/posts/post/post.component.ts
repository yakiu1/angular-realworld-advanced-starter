import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  routerPara;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // 一種是subscribe
    this.router.params.subscribe(para => {
      this.routerPara = para.id;
    });
    // 一種是快照
    console.log(this.router.snapshot.params.id);
  }

}
