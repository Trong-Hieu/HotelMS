import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/Services/bill.service';
import { BookingService } from '../../Services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookings = []
  bookingsFiltered = []
  bookingStatus: string = "W"
  bId
  constructor(
    private bookingService: BookingService,
    private billService: BillService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookingService.getAllBooking().subscribe(data =>{
      this.bookings = data
      this.bookingsFiltered = data.filter(bookings => {
        return bookings.bookingStatus === this.bookingStatus
      })
      console.log(this.bookings)
    })

  }

  changeStatus(bId, bookingStatus, booking){
    this.bId = bId
    console.log(this.bId, bookingStatus)

    this.bookingService.putBookingStatus(bId, bookingStatus, booking).subscribe(() =>{
      this.ngOnInit()
      if (bookingStatus == "I"){
      
        this.billService.postBill({
          billId: "",
          booking: booking,
          customerService: null,
          billStatus: "N",
        }).subscribe(data => {
          console.log(data)
          alert("Checked in")
        })
      }
      else{
        alert("Canceled")
      }
    })

    
  }
  

  changeViewByStatus(bookingStatus){
    this.bookingStatus = bookingStatus
    this.ngOnInit()
  }

  checkOut(bId, bookingStatus, booking){
    // this.bookingService.putBookingStatus(bId, bookingStatus, booking).subscribe(() =>{
    //   this.billService.postBill({
    //     billId: "",
	  //     booking: {
    //       booking.bookingId,
	  //     customerServiceId: "",
	  //     billStatus: "N",
    //   }).subscribe(data => {
    //     console.log(data)
    //     this.router.navigate(['/bill'])
    //   })
    // })
  }

}
