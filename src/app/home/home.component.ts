import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from '../Model/staff';
import { User } from '../Model/user';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User
  currentStaff: Staff


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentStaff = JSON.parse(localStorage.getItem("currentStaff"))
  }

  login(user){
    this.user = user
    console.log(this.user)
    this.auth.checkLogin(user).subscribe(data =>{
      console.log(data)
      this.currentStaff = data
      if (this.currentStaff) {
        localStorage.setItem("currentStaff", JSON.stringify(this.currentStaff))
        alert("Login success!")
      }
      else alert("invalid username or password")
    })
  }

  logout(){
    console.log("logout")
    this.currentStaff = null
    localStorage.clear()
    alert("Logout success")
    this.router.navigate(['/'])
    location.reload()
  }

}
