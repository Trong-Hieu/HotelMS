import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bill } from 'src/app/Model/Bill';
import { Staff } from 'src/app/Model/staff';
import { TotalService } from 'src/app/Model/totalService';
import { BillService } from 'src/app/Services/bill.service';
import { BookingService } from 'src/app/Services/booking.service';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  currentStaff: Staff = JSON.parse(localStorage.getItem("currentStaff"));

  bills = []
  chooseBill
  dateNumber
  roomPrice = 0

  billServices = []
  servicePrice = 0
  
  totalPrice

  constructor(
    private billService: BillService,
    private roomService: RoomService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    // this.billService.getAllBill().subscribe(b =>{
    //   this.bills = b
    //   console.log(this.bills)
    // })
    this.billService.getAllBill().subscribe(bills =>{
      this.bills = bills.filter(bill =>{
        return bill.billStatus === "N"
      })
      console.log(this.bills)
    })
  }

  chooseRoom(billId: string, bookingId: string){
    this.billService.getBillById(billId).subscribe(bill =>{
      this.chooseBill = bill
      console.log(this.chooseBill)
      let startDate = new Date(this.chooseBill.booking.startDate)
      let endDate = new Date(this.chooseBill.booking.endDate)
      this.dateNumber = Math.round(Math.abs((endDate.getTime() - startDate.getTime())/(1000*60*60*24)))
      console.log(this.dateNumber)
      
      this.roomPrice = this.dateNumber*this.chooseBill.booking.room.roomCategory.price
      this.totalPrice = this.roomPrice + this.servicePrice
    })

    console.log(bookingId)
    this.billService.getBillService(bookingId).subscribe(billService =>{
      this.billServices = billService
      console.log(this.billServices)
      for (let bs of this.billServices){
        this.servicePrice += bs.quantity*bs.service.price
      }
      console.log(this.servicePrice)
      this.totalPrice = this.roomPrice + this.servicePrice
    })

  }

  payBill(id: string){
    console.log(id)
    this.billService.getBillById(id).subscribe(bill =>{
      this.billService.payBill(bill.billId, bill).subscribe(payedbill =>{
        console.log(payedbill)
        alert("Pay Complete")
      })

      this.roomService.updateRoomStatus(bill.booking.room.roomId, bill.booking.room, "E")
        .subscribe()

      this.bookingService.putBookingStatus(bill.booking.bookingId, "O", bill.booking)
        .subscribe()


    })
  }

}
