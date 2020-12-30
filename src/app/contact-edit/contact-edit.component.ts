import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from './../models/contact';
import { ContactService } from '../../services/contactService'

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact: Contact

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
    // console.log();
    this.route.params.subscribe(data => {
      console.log(data.id);
      this.loadContact(data.id)
    })

  }

  loadContact(id) {
    if (id) {
      const contact$ = this.contactService.getContactById(id)
      console.log(contact$);
      contact$.subscribe(contact => {
        this.contact = contact
      })
    } else this.contact = this.contactService.getEmptyContact()
  }

  async addContact(ev: Event) {
    ev.preventDefault();
    if (!this.contact.name) return
    console.log(this.contact);
    this.contactService.save(this.contact).subscribe(() => {
      this.contact = this.contactService.getEmptyContact()
    })
    this.router.navigateByUrl(`contact`);
  }

  removeContact() {
    this.contactService.remove(this.contact._id)
    this.router.navigateByUrl(`contact`);
  }

}
