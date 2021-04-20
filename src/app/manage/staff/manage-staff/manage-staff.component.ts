import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {

  staffs = []

  constructor(
    private staffService: StaffService
  ) { }

  ngOnInit() {
    this.staffService.getAllStaff().subscribe(sf =>{
      this.staffs = sf
      console.log(this.staffs)
    })
  }

}
