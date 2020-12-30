import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from './../../services/contactService';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
 @Output() setFilter = new EventEmitter()

    constructor(private contactService: ContactService) { }
    filterBy = {
      term: ''
    }
ngOnInit(): void {

}


}
