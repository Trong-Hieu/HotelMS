import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/Services/bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  payedBills = []

  constructor(
    private billService: BillService
  ) { }

  ngOnInit(): void {
    this.billService.getAllBill().subscribe(pb =>{
      this.payedBills = pb.filter(pb =>{
        return pb.billStatus === "P"
      })
      console.log(this.payedBills)
    })
  }

}
