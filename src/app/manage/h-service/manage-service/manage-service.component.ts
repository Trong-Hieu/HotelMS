import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {

  serviceCategories = []
  services = []

  constructor(
    private holtelService: HotelServiceService
  ) { }

  ngOnInit(): void {
    this.holtelService.getAllCategory().subscribe(rc =>{
      this.serviceCategories = rc
      console.log(this.serviceCategories)
    })

    this.holtelService.getAllService().subscribe(services =>{
      this.services = services
      console.log(this.services)
    })
  }

  chooseServiceCategory(categoryId){
    console.log(categoryId)
    this.holtelService.getServiceByCategory(categoryId).subscribe(serviceFiltered =>{
      this.services = serviceFiltered
      console.log(this.services)
    })

  }

}
