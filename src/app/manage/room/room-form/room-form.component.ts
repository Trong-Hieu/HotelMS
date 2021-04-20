import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomForm } from 'src/app/Model/room';
import { RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  roomId
  roomForm: RoomForm = new RoomForm()
  roomCategories = []
  title = "ADD ROOM"

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.roomId = this.route.snapshot.paramMap.get("roomId")
    console.log(this.roomId)

    this.roomService.getRoomCategory().subscribe(rc =>{
      this.roomCategories = rc
      console.log(this.roomCategories)
    })

    if(this.roomId){
      this.title = "EDIT ROOM"
      this.roomService.getRoomById(this.roomId).subscribe(room =>{
        this.roomForm = room
        console.log(this.roomForm)
      })
    }

  }

  saveRoom(roomFormValue){
    console.log(roomFormValue)
    if(this.roomId){
      this.roomService.updateRoom(this.roomId, {
        roomId: this.roomId,
        roomNumber: roomFormValue.roomNumber,
        roomCategory: {
          roomCategoryId: roomFormValue.roomCategory,
          categoryName: "",
          price: 0
        },
        roomStatus: "E",
        description: roomFormValue.description
      }).subscribe(room =>{
          console.log(room)
          alert("Successful")
      })

    }
    else{
      this.roomService.postRoom({
        roomId: "",
        roomNumber: roomFormValue.roomNumber,
        roomCategory: {
          roomCategoryId: roomFormValue.roomCategory,
          categoryName: "",
          price: 0
        },
        roomStatus: "E",
        description: roomFormValue.description

      }).subscribe(room =>{
        console.log(room)
        alert("Successful")
      })
    }

  }

  delete(roomId){
    let cfm = confirm("Are you sure to delete this room ?")
    if (cfm){
    this.roomService.deleteRoom(roomId).subscribe(() =>{
      alert("Successful")
      this.router.navigate(['/manage-room']);
    })}
  }

}
