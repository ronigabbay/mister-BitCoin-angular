import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
@Input() user:any
@Input() contact:any

  userMoves: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.user.moves);
    if(this.contact) {
      this.userMoves =this.user.moves
      const userMoves = this.user.moves
          const currUserMoves = userMoves.filter(move => move.toId === this.contact._id)
          console.log(currUserMoves);
          this.userMoves = currUserMoves
    } else {
      this.userMoves = this.user.moves
      const lastMoves = []
      if (this.user.moves) {
          for (var i = 0; i < this.user.moves.length; i++) {
              lastMoves.push(this.user.moves[i])
              if (lastMoves.length > 2) {
                this.userMoves = lastMoves; return
              } else {
                this.userMoves = lastMoves
              }
          }
      }
     
    }
    
  }

}
