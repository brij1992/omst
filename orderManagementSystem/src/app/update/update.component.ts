import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  alert: boolean = false;
  editOrders = new FormGroup({
    OrderNumber: new FormControl(''),
    OrderDueDate: new FormControl(''),
    CustomerName: new FormControl(''),
    CustomerAddress: new FormControl(''),
    CustomerPhone: new FormControl(''),
    OrderTotal: new FormControl(''),
  });
  constructor(private order: CommonService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.order
      .getCurrentData(this.router.snapshot.params.OrderNumber)
      .subscribe((result) => {
        this.editOrders = new FormGroup({
          OrderNumber: new FormControl(''),
          OrderDueDate: new FormControl(''),
          CustomerName: new FormControl(''),
          CustomerAddress: new FormControl(''),
          CustomerPhone: new FormControl(''),
          OrderTotal: new FormControl(''),
        });
      });
  }
  updateOrder() {
    this.order
      .updateOrder(
        this.router.snapshot.params.OrderNumber,
        this.editOrders.value
      )
      .subscribe((result) => {
        console.log(result, 'data sucessfully updated');
        this.alert = true;
      });
  }
  closeAlert() {
    this.alert = false;
  }
}
