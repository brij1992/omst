import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  URL = 'http://localhost:3000/order';

  constructor(private _http: HttpClient) {}
  getOrderList() {
    return this._http.get(this.URL);
  }
  addOrder(data: any) {
    return this._http.post(this.URL, data);
  }
  deleteOrder(OrderNumber: any) {
    return this._http.delete(`${this.URL}/${OrderNumber}`);
  }
  getCurrentData(OrderNumber: any) {
    return this._http.get(`${this.URL}/${OrderNumber}`);
  }
  updateOrder(OrderNumber: any, data: any) {
    return this._http.put(`${this.URL}/${OrderNumber}, data`);
  }
}
