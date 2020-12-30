import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: any;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.contact);

  }

}
