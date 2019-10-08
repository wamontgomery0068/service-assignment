import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent implements OnInit {

  // Create an users array and set type to string
  users: string [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  // Create an onSetToInactive method
  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

}
