import { UserService } from './../../common/user.service';
import { User } from './../../common/common';
import { Component, Input, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  @Input() public isDivVisible;
  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.user == null) {
      this.user = {
        Id: 0,
        Name: '',
        Email: '',
        MobileNumber: '',
        RoleType: 1,
        Status: 'Active'
      };
    }
  }
//hide the modal
  onClose() {
    this.isDivVisible = false;
    console.log(this.isDivVisible);
  }
  //save the user info
  saveUser(): void {
    if (this.user.Name !== '') {
      this.userService.saveUser(this.user).subscribe(data => {
        if (data) {
          alert('User data saved.');
        }
      }, error => {
        console.log(error);
      });
    } else {
      alert('Please enter Name');
    }
  }
}
