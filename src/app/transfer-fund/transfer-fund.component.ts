import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../services/userService';
import { Contact } from './../models/contact';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  user= null
  amount: number= null


  constructor(private userService: UserService) { }
  @Input() contact: any;

  ngOnInit(): void {
    this.user = this.userService.getUser()
    console.log(this.user);
    
  }

  onTransfer(ev) {
    ev.preventDefault()
        if(this.amount <= this.user.coins) {
          this.user.coins -= this.amount
          this.user.moves.push(this.userService.addMove(this.contact, this.amount))
            this.userService.saveUser(this.user)
            this.amount = null
        }
  }
  

}
