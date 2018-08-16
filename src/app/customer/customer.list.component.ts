import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './customer.list.component.html'
})
export class CustomerListComponent implements OnInit {
    customerList: ICustomer[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(
            data => {
                this.customerList = data['customerListData'];
            }
        );
    }
}
