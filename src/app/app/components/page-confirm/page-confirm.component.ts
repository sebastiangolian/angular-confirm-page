import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-page-confirm',
  templateUrl: './page-confirm.component.html',
  styleUrls: ['./page-confirm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageConfirmComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
