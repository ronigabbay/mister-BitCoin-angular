import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../services/userService';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
// @Input() user:any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // logout() {
  //   this.userService.logout()
  // }

}
