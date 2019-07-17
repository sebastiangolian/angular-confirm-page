import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-confirm',
  templateUrl: './page-confirm.component.html',
  styleUrls: ['./page-confirm.component.css']
})
export class PageConfirmComponent implements OnInit {

  private resignationUrl: string = "https://www.google.com"
  private acceptUrl: string = "/home"
  public config:any = {show: true, ignoreBackdropClick: true, keyboard: false}

  constructor(private router: Router) {}
   
  ngOnInit() {}

  accept()
  {
    this.router.navigate([this.acceptUrl]);
  }

  reject()
  {
    window.open(this.resignationUrl, '_self');
  }
}
