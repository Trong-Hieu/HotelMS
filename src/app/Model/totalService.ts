import { Booking } from "./booking";
import { Service } from "./service";

export interface TotalService{
    customerServiceId: string,
	service: Service,
	useDate: string,
	quantity: Number,
  	booking: Booking,
    total: Number
}