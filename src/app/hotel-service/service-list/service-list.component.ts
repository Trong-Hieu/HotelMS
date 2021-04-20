import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  customerService = []

  constructor(
    private hotelService: HotelServiceService
  ) { }

  ngOnInit() {
    this.hotelService.getCustomerService().subscribe(cs =>{
      this.customerService = cs;
      console.log(this.customerService)
    })
  }

}
