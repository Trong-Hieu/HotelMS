import { Booking } from "./booking";
import { Service } from "./service";

export interface CustomerService{
  	customerServiceId: string,
	service: Service,
	useDate: string,
	quantity: Number,
  	booking: Booking,
	status: string
}

export class CustomerServiceForm{
	serviceId: string;
	categoryId: string;
	useDate: string;
	quantity: Number;
	roomId: string
}
