import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { UsersServices } from '../users/users.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[];
  constructor(private _userService : UsersServices ) {}

  ngOnInit() {
  this.loadUsers()
  }

  loadUsers(){
    this._userService.getUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(user){
    if (confirm("Are you sure you want to delete " + user.name + "?")) {
        let index = this.users.indexOf(user)
        this.users.splice(index, 1)

        this._userService.deleteUser(user.id)
        .subscribe(null,
            err => { alert("Could not delete the user.");
            this.users.splice(index, 0, user);
        })
    }
  }
}
