import { Component, OnInit } from '@angular/core';
import { Staff } from '../Model/staff';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  currentStaff: Staff = JSON.parse(localStorage.getItem("currentStaff"));

  constructor() { }

  ngOnInit() {
    console.log(this.currentStaff)
  }

  updateStaff(staff){

  }

}
