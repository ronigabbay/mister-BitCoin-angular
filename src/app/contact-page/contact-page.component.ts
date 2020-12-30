import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from './../../services/contactService';
import { Contact } from './../models/contact';
import { Subscription } from 'rxjs'

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  // @Input() filter: String
  subscription: Subscription
  contacts: Contact[] = []
  // contactId: string = null
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(cotacts => {
      this.contacts = [...cotacts]
    })
    this.contactService.loadContacts()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  setFilter(filterBy) {
    console.log('filterBy:', filterBy)
    this.contactService.loadContacts(filterBy)
  }
 

}
