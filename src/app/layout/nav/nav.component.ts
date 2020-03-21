import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  quaryData;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.quaryData = this.router.params[0];
  }

}
