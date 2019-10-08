import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  // Crate an users array and set type to string
  users: string [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  // Create an onSetToActive method
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

}
