import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/Model/staff';
import { StaffForm } from 'src/app/Model/staffForm';
import { StaffService } from 'src/app/Services/staff.service';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {

  staffId
  staffForm: Staff = new StaffForm()
  departments = []
  roles = []
  title = "ADD STAFF"

  constructor(
    private staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.staffService.getAllDepartment().subscribe(dp =>{
      this.departments = dp
      console.log(this.departments)
    })
    this.staffService.getAllRole().subscribe(role =>{
      this.roles = role
      console.log(this.roles)
    })


    this.staffId = this.route.snapshot.paramMap.get("staffId")
    console.log(this.staffId)

    if (this.staffId){
      this.title = "EDIT STAFF"
      this.staffService.getStaffById(this.staffId).subscribe(stf =>{
        this.staffForm = stf
        console.log(this.staffForm)

      })
    }

  }

  saveStaff(staffformValue){
    console.log(staffformValue)
    if (this.staffId){
      this.staffService.updateStaff(this.staffId, {
        staffId: this.staffId,
        department: {
          departmentId: staffformValue.department,
          departmentName: ""
        },
	      staffName: staffformValue.staffName,
	      gender: staffformValue.gender,
	      birthday: staffformValue.birthday,
	      staffAddress: staffformValue.staffAddress,
        indentityNumber: staffformValue.indentityNumber,
        phoneNumber: staffformValue.phoneNumber,
        username: staffformValue.username,
        staffPassword: staffformValue.staffPassword,
        role: {
          roleId: staffformValue.role,
          roleName: ""
        },
      }).subscribe(staff =>{
        console.log(staff)
        alert("Successful")
      })
    }
    else{
      this.staffService.postStaff({
        staffId: "",
        department: {
          departmentId: staffformValue.department,
          departmentName: ""
        },
	      staffName: staffformValue.staffName,
	      gender: staffformValue.gender,
	      birthday: staffformValue.birthday,
	      staffAddress: staffformValue.staffAddress,
        indentityNumber: staffformValue.indentityNumber,
        phoneNumber: staffformValue.phoneNumber,
        username: staffformValue.username,
        staffPassword: staffformValue.staffPassword,
        role: {
          roleId: staffformValue.role,
          roleName: ""
        },

      }).subscribe(staff =>{
        console.log(staff)
        alert("Successful")
      })
    }
  }

  delete(staffId){
    let cfm = confirm("Are you sure to delete this staff ?")
    if (cfm){
    this.staffService.delete(staffId).subscribe(() =>{
      alert("Successful")
      this.router.navigate(['/manage-staff']);
    })}
  }

}
