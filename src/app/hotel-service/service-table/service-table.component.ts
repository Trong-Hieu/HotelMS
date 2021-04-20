import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.css']
})
export class ServiceTableComponent implements OnInit {

  tables

  constructor(
    private holtelService: HotelServiceService
  ) { }

  ngOnInit(): void {
    this.holtelService.getTables().subscribe(tbl =>{
      this.tables = tbl
      console.log(this.tables)
    })
  }

}
