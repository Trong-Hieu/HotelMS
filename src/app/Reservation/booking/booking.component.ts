import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/Model/booking';
import { BookingForm } from 'src/app/Model/bookingForm';
import { Customer } from 'src/app/Model/customer';
import { Room } from 'src/app/Model/room';
import { RoomCategory } from 'src/app/Model/roomCategory';
import { Staff } from 'src/app/Model/staff';
import { BookingService } from '../../Services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  roomCategories = []
  roomsByCategory = []
  bookingForm: BookingForm = new BookingForm()
  bId: string
  booking: Booking
  customer: Customer
  room: Room
  roomCategory: RoomCategory
  startDate
  endDate

  currentStaff: Staff = JSON.parse(localStorage.getItem("currentStaff"));

  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bookingService.getRoomCategory().subscribe(rc =>{
      this.roomCategories = rc
      console.log(this.roomCategories)
    })

    this.bId = this.route.snapshot.paramMap.get("bId")
    console.log(this.bId)
    if (this.bId){
      this.bookingService.getBookingById(this.bId).subscribe(b =>{
        this.booking = b
        console.log(this.booking)

          this.selectedCategory(this.booking.room.roomCategory.roomCategoryId)
          // this.selectedCategory(this.booking.room.roomId)

          this.bookingForm.customerName = this.booking.customer.customerName
          this.bookingForm.customerGender = this.booking.customer.gender
          this.bookingForm.customerIdentification = this.booking.customer.identityNumber
          this.bookingForm.customerAddress = this.booking.customer.customerAddress
          this.bookingForm.customerEmail = this.booking.customer.email
          this.bookingForm.roomCategory = this.booking.room.roomCategory.roomCategoryId
          this.bookingForm.roomId = this.booking.room.roomId
          this.bookingForm.startDate = this.booking.startDate //moment
          this.bookingForm.endDate = this.booking.endDate

          
          console.log(this.bookingForm)

      })
    }
  }

  selectedStartDate(startDate: string){
    console.log(startDate)
    this.startDate = startDate
  }

  selectedEndDate(endDate: string){
    console.log(endDate)
    this.endDate = endDate
  }

  selectedCategory(roomCategoryId: string){
    console.log(roomCategoryId)

    this.bookingService.getRoomByCategoryAndCheckDate(roomCategoryId, this.startDate, this.endDate)
      .subscribe(data =>{
        this.roomsByCategory = data
        console.log(this.roomsByCategory)
    })
  }

  selectedRoom(roomId: string){
    console.log(roomId)
  }

  saveBooking(bookingForm){
    console.log(bookingForm);

    if (this.bId){ // Update booking
      this.bookingService.getCustomerByIdentityNumber(bookingForm.customerIdentification)
        .subscribe(data => {

          this.bookingService.putBooking(this.bId,{
            bookingId: this.bId,
            bookingStatus: "W",
            customer: data,
            staff: this.currentStaff,
            room: {
              roomId: bookingForm.roomId,
              roomNumber: 0,
              roomCategory: {
                roomCategoryId: "",
                categoryName: "",
                price: 0
              },
              roomStatus: "",
              description: ""
            },
            startDate: bookingForm.startDate,
            endDate: bookingForm.endDate
          }).subscribe(updateData => {
            console.log(updateData)
          })
        })
    }
    else{ // save new booking

      this.bookingService.postCustomer({
        customerId: "",
        customerName: bookingForm.customerName,
        gender: bookingForm.customerGender,
        customerAddress: bookingForm.customerAddress,
        identityNumber: bookingForm.customerIdentification,
        email: bookingForm.customerEmail
      }).subscribe(data => {

        this.bookingService.getCustomerByIdentityNumber(data.identityNumber)
          .subscribe(data => {

            this.bookingService.postBooking({
              bookingId: "",
              bookingStatus: "W",
              customer: data,
              staff: this.currentStaff,
              room: {
                roomId: bookingForm.roomId,
                roomNumber: 0,
                roomCategory: {
                  roomCategoryId: "",
                  categoryName: "",
                  price: 0
                },
                roomStatus: "",
                description: ""
              },
              startDate: bookingForm.startDate,
              endDate: bookingForm.endDate
            }).subscribe(data => {
              console.log(data)
            })
          })
      })
    }

  }

}
