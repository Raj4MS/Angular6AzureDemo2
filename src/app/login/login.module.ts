import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';


@NgModule({
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: LoginComponent }
        ])
    ],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule {

}
