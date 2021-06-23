import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public collection: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getOrderList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection);
    });
  }
}
