import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomCategory } from '../Model/roomCategory';
import { Room } from '../Model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  roomUrl: string = "http://localhost:8080/rooms"
  roomCategoryUrl: string = "http://localhost:8080/roomcategories"

  constructor(
    private http: HttpClient
  ) { }

  getAllRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomUrl);
  }

  getRoomCategory(): Observable<RoomCategory[]>{
    return this.http.get<RoomCategory[]>(this.roomCategoryUrl);
  } 

  getRoomCategoryById(rcId: string): Observable<RoomCategory>{
    return this.http.get<RoomCategory>(this.roomCategoryUrl + "/" + rcId);
  }

  getRoomById(rId: string): Observable<Room>{
    return this.http.get<Room>(this.roomUrl + "/" + rId);
  }

  getRoomByCategory(roomCategoryId: string): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomUrl + "/category/" + roomCategoryId);
  }

  postRoom(room: Room): Observable<Room>{
    return this.http.post<Room>(this.roomUrl, room);
  }

  updateRoom(id: string, room: Room): Observable<Room>{
    return this.http.put<Room>(this.roomUrl + "/" + id, room);
  }

  updateRoomStatus(id: string, room: Room, status: string): Observable<Room>{
    return this.http.put<Room>(this.roomUrl + "/" + id + "/" + status, room);
  }

  deleteRoom(id: string): Observable<any>{
    return this.http.delete<any>(this.roomUrl + "/" + id,
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response', responseType: 'text' as 'json'
    });
  }

}
