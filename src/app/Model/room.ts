import { RoomCategory } from "./roomCategory";

export interface Room {
  roomId: string,
  roomStatus: string,
  roomCategory: RoomCategory,
  roomNumber: Number,
  description: string
}

export class RoomForm {
  roomId: string;
  roomStatus: string;
  roomCategory: RoomCategory = {
    roomCategoryId: "",
    categoryName: "",
    price: 0
  }
  roomNumber: Number;
  description: string;
}
