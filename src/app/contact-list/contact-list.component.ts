import { Component, EventEmitter, Input, OnInit, Output, SimpleChange  } from '@angular/core';
import { Contact } from './../models/contact';
import { ContactService } from './../../services/contactService';
import  {Subscription} from 'rxjs'

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];

  constructor() { }

  ngOnInit(): void {
  //  console.log(this.contacts);
   
  }



}
