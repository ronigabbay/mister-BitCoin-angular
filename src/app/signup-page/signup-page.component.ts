import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/userService';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  name: string

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignup(ev) {
    ev.preventDefault()
    console.log(this.name);
    this.userService.signup(this.name)
    this.router.navigateByUrl('');
  }

}
