import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  routes: any;

  constructor(private router: Router) {
    this.routes = this.router.config.filter((element) => {return (!element.path.match(":|error|\\*"))})
  }

  ngOnInit() {
  }

}
