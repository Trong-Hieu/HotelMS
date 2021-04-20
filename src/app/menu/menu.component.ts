import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routerLink
  @ViewChild("menu1") menu1
  @ViewChild("menu2") menu2
  @ViewChild("menu3") menu3
  @ViewChild("menu4") menu4
  @ViewChild("menu5") menu5


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.routerLink = location.pathname
    console.log(this.routerLink)
    console.log("bitch")
  }

  changeMenu(menu){
    console.log(menu)
    if (menu == "home") {
      this.menu1.nativeElement.classList.add("active")
      this.menu2.nativeElement.classList.remove("active")
      this.menu3.nativeElement.classList.remove("active")
      this.menu4.nativeElement.classList.remove("active")
      this.menu5.nativeElement.classList.remove("active")
    }
    else if (menu == "booking") {
      this.menu1.nativeElement.classList.remove("active")
      this.menu2.nativeElement.classList.add("active")
      this.menu3.nativeElement.classList.remove("active")
      this.menu4.nativeElement.classList.remove("active")
      this.menu5.nativeElement.classList.remove("active")
    } 
    else if (menu == "service") {
      this.menu1.nativeElement.classList.remove("active")
      this.menu2.nativeElement.classList.remove("active")
      this.menu3.nativeElement.classList.add("active")
      this.menu4.nativeElement.classList.remove("active")
      this.menu5.nativeElement.classList.remove("active")

    } 
    else if (menu == "bill") {
      this.menu1.nativeElement.classList.remove("active")
      this.menu2.nativeElement.classList.remove("active")
      this.menu3.nativeElement.classList.remove("active")
      this.menu4.nativeElement.classList.add("active")
      this.menu5.nativeElement.classList.remove("active")

    } 
    else {
      this.menu1.nativeElement.classList.remove("active")
      this.menu2.nativeElement.classList.remove("active")
      this.menu3.nativeElement.classList.remove("active")
      this.menu4.nativeElement.classList.remove("active")
      this.menu5.nativeElement.classList.add("active")

    }

  }
  

}
