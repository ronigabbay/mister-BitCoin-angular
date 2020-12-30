import { Component } from '@angular/core';
import { UserService } from './../services/userService';
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mister-Bitcoin';
  user: any 
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    console.log(this.user);
    
  }
}
