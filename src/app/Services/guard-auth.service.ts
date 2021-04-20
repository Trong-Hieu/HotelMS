import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Staff } from '../Model/staff';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService {

  currentStaff: Staff


  constructor(
    private router: Router
  ) { }

  canActivate(route, state: RouterStateSnapshot){
    this.currentStaff = JSON.parse(localStorage.getItem("currentStaff"));
    if (this.currentStaff) return true;

    this.router.navigate(['/']);
    alert("You're not Login")
    console.log("login plz")
    return false;
  }
}
