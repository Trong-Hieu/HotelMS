import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../Model/bill';
import { Booking } from '../Model/booking';
import { Staff } from '../Model/staff';
import { CustomerService } from '../Model/customerService';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  billUrl: string = "http://localhost:8080/bills"
  customerServiceUrl: string = "http://localhost:8080/customerservices"
  bookingUrl: string = "http://localhost:8080/bookings/getbill"

  constructor(
    private http: HttpClient,
  ) { }

  getAllBill(): Observable<Bill[]>{
    return this.http.get<Bill[]>(this.billUrl);
  }

  getBillById(billId: string): Observable<Bill>{
    return this.http.get<Bill>(this.billUrl + "/" + billId);
  }

  getBillService(bookingId: string): Observable<CustomerService[]>{
    return this.http.get<CustomerService[]>(this.customerServiceUrl + "/booking/" + bookingId);
  }

  getBooking(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this.bookingUrl)
  }

  postBill(bill: Bill): Observable<Bill>{
    return this.http.post<Bill>(this.billUrl, bill)
  }

  payBill(id: string, bill: Bill): Observable<Bill>{
    return this.http.put<Bill>(this.billUrl + "/" + id + "/P", bill)
  }

}
