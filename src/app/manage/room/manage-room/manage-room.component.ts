import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.css']
})
export class ManageRoomComponent implements OnInit {

  categories = []
  rooms = []

  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.roomService.getRoomCategory().subscribe(rc =>{
      this.categories = rc
      console.log(this.categories)
    })

    this.roomService.getAllRooms().subscribe(rooms =>{
      this.rooms = rooms
      console.log(this.rooms)
    })
  }

  chooseRoomCategory(categoryId){
    console.log(categoryId)
    this.roomService.getRoomByCategory(categoryId).subscribe(roomFiltered =>{
      this.rooms = roomFiltered
      console.log(this.rooms)
    })

  }

}
