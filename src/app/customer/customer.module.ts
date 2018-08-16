import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomerListComponent } from './customer.list.component';
import { CustomerDetailsComponent } from './customer.details.component';
import { CustomerService } from './customer.service';
import { CustomerListResolver } from './customer.list.resolver';
import { CustomerDetailsResovler } from './customer.details.resolver';
import { CustomerGaurd } from './customer.gaurd';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: CustomerListComponent,
                resolve: { customerListData: CustomerListResolver },
            },
            {
                path: 'list',
                component: CustomerListComponent,
                resolve: { customerListData: CustomerListResolver }
            },
            {
                path: 'details/:id',
                component: CustomerDetailsComponent,
                resolve: { customerDetailsData: CustomerDetailsResovler }
            }
        ])
    ],
    declarations: [
        CustomerListComponent,
        CustomerDetailsComponent
    ],
    providers: [
        CustomerService,
        CustomerListResolver,
        CustomerDetailsResovler,
        CustomerGaurd
    ]
})
export class CustomerModule {

}
