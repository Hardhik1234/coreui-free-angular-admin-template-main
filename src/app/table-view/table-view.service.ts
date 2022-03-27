import { Injectable } from '@angular/core';
import { Customer } from './customer';
import {HttpClient} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class TableViewService {
  constructor(private http:HttpClient) { }
  getCustomersLarge() {
    return this.http.get<any>('../assets/customer-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }
}
