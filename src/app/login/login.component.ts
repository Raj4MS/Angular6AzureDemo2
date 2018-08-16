import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { TokenModel } from './token.model';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginFormGroup: FormGroup;
    errMessage = '';

    constructor(private fb: FormBuilder,
        private router: Router,
        private loginService: LoginService) {

    }

    ngOnInit() {
        this.loginFormGroup = this.fb.group({
            Username: ['rajkumar', Validators.required],
            Password: ['password', Validators.required]
        });
    }

    login() {
        this.loginService.authenticateUser(this.loginFormGroup.value.Username, this.loginFormGroup.value.Password)
            .subscribe(
                (response: TokenModel) => {
                    if (response && response.token) {
                        console.log(response);
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('isAuth', 'true');
                        this.router.navigateByUrl('/customer');
                    } else {
                        this.errMessage = 'Invalid username and password.';
                    }
                },
                (error) => {
                    console.log(error);
                }
            );

    }


}
