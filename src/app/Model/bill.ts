import { Booking } from "./booking";
import { CustomerService } from "./customerService";

export interface Bill{
  	billId: string,
	booking: Booking,
	customerService: CustomerService,
	billStatus: string,
}
