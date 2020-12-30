import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../../services/contactService';
import { UserService } from './../../services/userService';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
 
  slectedContactId: string
  contact:any
  user:any
  
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      console.log(data.id);
      this.slectedContactId = data.id
      // this.contact = data.contact
    })
    
    this.contactService.getContactById(this.slectedContactId).subscribe((cotact) => {
     this.contact = cotact
    })

    this.user = this.userService.getUser()
    // this.userMoves = this.user.moves
    console.log(this.user.moves);
    // console.log(this.user.moves);
    
  }

  goBack() {
    console.log('back');
    this.router.navigateByUrl(`contact`);
    
  }

}
