import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../Model/booking';
import { Customer } from '../Model/customer';
import { Room } from '../Model/room';
import { RoomCategory } from '../Model/roomCategory';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingUrl: string = "http://localhost:8080/bookings"
  private roomCategoryUrl: string = "http://localhost:8080/roomcategories"
  private roomUrl: string = "http://localhost:8080/rooms"
  private roomByCategoeyUrl: string = "http://localhost:8080/rooms/category/"
  private customerUrl: string = "http://localhost:8080/customers"
  private customerByIdentityNumberUrl: string = "http://localhost:8080/customers/identity/"

  constructor(
    private http: HttpClient,
  ) { }

  getAllBooking(): Observable<Booking[]>{
    // return [
    //   { booking_id: "BK001",
    //     customer_id: "KH001",
    //     staff_id: "ST001",
    //     room_id: "R003",
    //     start_date: "2017-01-02",
    //     end_date: "2017-01-10",
    //     booking_status: "W"
    // }
    // ]
    return this.http.get<Booking[]>(this.bookingUrl);
  }

  getBookingById(bId: string): Observable<Booking>{
    return this.http.get<Booking>(this.bookingUrl + "/" + bId)
  }

  getRoomCategory(): Observable<RoomCategory[]>{
    return this.http.get<RoomCategory[]>(this.roomCategoryUrl);
  }

  getRoomCategoryById(rcId): Observable<RoomCategory>{
    return this.http.get<RoomCategory>(this.roomCategoryUrl + "/" + rcId);
  }

  getRoomByCategoryAndCheckDate(roomCategoryId: string, startDate: string, endDate: string): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomByCategoeyUrl + roomCategoryId + "/" + startDate + "/" + endDate);
  }

  getRoomById(rId: string): Observable<Room>{
    return this.http.get<Room>(this.roomUrl + "/" + rId);
  }

  getCustomerByIdentityNumber(identityNumber: Number): Observable<Customer>{
    return this.http.get<Customer>(this.customerByIdentityNumberUrl + identityNumber);
  }

  getCustomerById(cId: string): Observable<Customer>{
    return this.http.get<Customer>(this.customerUrl + "/" + cId);
  }

  getRoomByBookingStatus(): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomUrl + "/bookingstatus")
  }

  getBookingInByRoomId(roomId: string): Observable<Booking>{
    return this.http.get<Booking>(this.bookingUrl + "/roomIn/" + roomId)
  }

  postBooking(booking: Booking): Observable<Booking>{
    return this.http.post<Booking>(this.bookingUrl, booking);
  }

  postRoomCategory(roomCategory: RoomCategory): Observable<RoomCategory>{
    return this.http.post<RoomCategory>(this.roomCategoryUrl, roomCategory);
  }

  postCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.customerUrl, customer)
  }

  putBooking(bId: string, booking: Booking): Observable<Booking>{
    return this.http.put<Booking>(this.bookingUrl + "/" + bId, booking);
  }

  putBookingStatus(bId: string, status: string, booking: Booking): Observable<Booking>{
    return this.http.put<Booking>(this.bookingUrl + "/" + bId + "/" + status, booking);
  }
}
