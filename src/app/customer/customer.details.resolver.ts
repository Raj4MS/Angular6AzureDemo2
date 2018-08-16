import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ICustomer } from './customer.model';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerDetailsResovler implements Resolve<ICustomer> {

    constructor(private customerService: CustomerService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICustomer> {
        const id = +route.params['id'];
        return this.customerService.getCustomerById(id);
    }
}
