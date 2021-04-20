import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, CustomerServiceForm } from 'src/app/Model/customerService';
import { Room } from 'src/app/Model/room';
import { ServiceCategory } from 'src/app/Model/service-category';
import { BookingService } from 'src/app/Services/booking.service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {

  serviceCategories = []
  services = []
  category
  roomlist = []
  bookingIn

  tableId
  chooseService: CustomerServiceForm = new CustomerServiceForm()
  customerServiceId

  constructor(
    private hotelService: HotelServiceService,
    private bookingService: BookingService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.hotelService.getAllCategory().subscribe(svc =>{
      this.serviceCategories = svc
      console.log(this.serviceCategories)

      this.bookingService.getRoomByBookingStatus().subscribe(rl =>{
        this.roomlist = rl
        console.log(this.roomlist)
      })
    })

    this.tableId = this.route.snapshot.paramMap.get("tableId")
    console.log(this.tableId)

    this.hotelService.getTableById(this.tableId).subscribe(tbl => {
      console.log(tbl)
      this.customerServiceId = tbl.customerService.customerServiceId
      if (tbl.customerService){
        this.hotelService.getCustomerServiceById(this.customerServiceId)
        .subscribe(data =>{
          this.chooseService.categoryId = data.service.serviceCategory.categoryId
          this.selectedCategory(this.chooseService.categoryId)
          this.chooseService.serviceId = data.service.serviceId
          this.chooseService.roomId = data.booking.room.roomId
          this.chooseService.quantity = data.quantity
          this.chooseService.useDate = data.useDate
        })
      }
      
    })

  }

  saveBookService(valueFromForm){
    console.log(valueFromForm)
    if (this.customerServiceId){
      this.hotelService.updateCustomerService(this.customerServiceId, {
        customerServiceId: this.customerServiceId,
        service: {
          serviceId: valueFromForm.serviceId,
          serviceName: "",
          price: 0,
          description : "",
          serviceCategory: {
            categoryId: "",
            categoryName: ""
          },
        },
        useDate: valueFromForm.useDate,
        quantity: valueFromForm.quantity,
        booking: this.bookingIn[0],
        status: "W"
      }).subscribe(() => {
        alert("update success")
      })

    }
    else{
      this.hotelService.postCustomerService({
        customerServiceId: "",
        service: {
          serviceId: valueFromForm.serviceId,
          serviceName: "",
          price: 0,
          description : "",
          serviceCategory: {
            categoryId: "",
            categoryName: ""
          },
        },
        useDate: valueFromForm.useDate,
        quantity: valueFromForm.quantity,
        booking: this.bookingIn[0],
        status: "W"
      }).subscribe( data => {
        this.hotelService.updateServiceTabel(this.tableId, data.customerServiceId, {
          tableId: this.tableId,
          customerService: data
        }).subscribe(() =>{
          alert("Save success")
        })

      })
    }
    
  }


  selectedCategory(category: string){
    this.category = category
    console.log(this.category)
    this.hotelService.getServiceByCategory(category).subscribe(sv =>{
      this.services = sv
      console.log(this.services)
    })

  }

  selectedRoom(roomId: string){
    console.log(roomId)
    this.bookingService.getBookingInByRoomId(roomId).subscribe(booking =>{
      this.bookingIn = booking
      console.log(this.bookingIn[0])
    })

  }

}
