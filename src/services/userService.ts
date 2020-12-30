
import { Injectable } from '@angular/core';
import * as moment from 'moment';

const KEY: string = 'userDb'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() { }
    private user = { name: 'Ochoa Hyde', coins: 100, moves: [] }



    public getUser() {
        var user = this._loadFromStorage(KEY)
        // if (!user) user = this.user 
        return user
    }

    public signup(name) {
        var user = {
          name: name,
          coins: 100,
          moves: [],
          _id: this._makeId(),
          imgUrl: `https://robohash.org/${name}?set=set5`
        }
        this._storeToStorage(KEY, user)
        return user
      }
      

      public logout() {
        localStorage.clear();
      }

      public addMove(contact, amount) {
        return {
          toId: contact._id,
          to: contact.name,
          at: moment(new Date).format('MMMM Do YYYY'),
          amount: amount
        }
      }

      public saveUser(user) {
        this._storeToStorage(KEY, user)
        // _updateUser(user)
      }
      
      
      // public _updateUser(user) {
      //   const userIdx = gUsers.findIndex(currUser => currUser._id === user._id)
      //   if (userIdx !== -1) {
      //       gUsers.splice(userIdx, 1, user)
      //       localStorage.setItem('users', JSON.stringify(gUsers))
      //   }
      // }



      
    private _storeToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value) || null);
    }
    
    private _loadFromStorage(key) {
        let data = localStorage.getItem(key);
        return (data) ? JSON.parse(data) : undefined;
    }
    
    private _makeId(length = 5) {
        var txt = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }

}