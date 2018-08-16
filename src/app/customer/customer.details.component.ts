import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer.model';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './customer.details.component.html'
})
export class CustomerDetailsComponent implements OnInit {

    customerFormGroup: FormGroup;
    customer: ICustomer;

    constructor(private route: ActivatedRoute,
        private fb: FormBuilder) {

    }

    ngOnInit() {

        // const customerData = this.route.snapshot.data['customerDetailsData'];
        // this.customer = customerData;
        this.route.data.subscribe(
            data => {
                this.customer = data['customerDetailsData'];
            }
        );
        this.customerFormGroup = this.fb.group({
            Id: [this.customer.Id],
            Name: [this.customer.Name],
            Age: [this.customer.Age],
            Gender: [this.customer.Name],
            DOB: [this.customer.DOB],
            Email: [this.customer.Email],
            PhoneNumber: [this.customer.PhoneNumber],
        });
    }
}
