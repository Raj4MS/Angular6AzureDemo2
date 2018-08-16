import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ICustomer } from './customer.model';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerListResolver implements Resolve<ICustomer[]> {

    constructor(private customerService: CustomerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomer[]> {
        const customerListData = this.customerService.getCustomerList();
        return customerListData;
    }

}
