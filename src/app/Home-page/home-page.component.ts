import { Component, OnInit } from '@angular/core';
import { BitcoinService } from './../../services/bitcoinService';
import { UserService } from './../../services/userService';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  rate = null
  user: any 
  constructor(private bitcoinService: BitcoinService, private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.bitcoinService.getRate().subscribe((rate: number) => {
     this.rate = 1 / rate
    })
    this.user = this.userService.getUser()
    
  }

  logout() {
    this.userService.logout()
    this.router.navigateByUrl('signup')
  }


}
