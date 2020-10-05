import { User } from './../common/common';
import { UserService } from './../common/user.service';
import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit{

  userList: User[];
 @Input() public isDivVisible;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
//get user
  getUsers(): void {
    this.userService.getUsersList().subscribe(data=>{
      this.userList = data;
    }, error => {
      console.log(error);
    });
  }
//delete user based on the userID
  deleteUser(userId):void{
    this.userService.deleteUser(userId).subscribe(data=>{
      if(data){
        this.getUsers();
        alert("User Deleted");
      }
    },
    error=>{
      console.log(error);
    });
  }

showModal(){
  this.isDivVisible=true;
}

}
