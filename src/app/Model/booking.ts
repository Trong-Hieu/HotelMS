import { Customer } from "./customer";
import { Room } from "./room";
import { Staff } from "./staff";

export interface Booking {
  bookingId: string,
  customer: Customer,
  staff: Staff,
  room: Room,
  startDate: string,
  endDate: string,
  bookingStatus: string
}
