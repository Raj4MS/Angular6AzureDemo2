import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from './customer.model';
import { map } from 'rxjs/operators';


@Injectable()
export class CustomerService {

    // baseUrl = 'http://localhost:49675';
    baseUrl = 'https://webapi2azuredemo.azurewebsites.net/';

    constructor(private http: HttpClient) {

    }

    getCustomerList(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(`${this.baseUrl}/api/customer/list`)
            .pipe(
                map(data => data)
            );
    }

    getCustomerById(id: number): Observable<ICustomer> {
        return this.http.get<ICustomer>(`${this.baseUrl}/api/customer/details/${id}`)
            .pipe(
                map(data => data),
            );
    }
}
