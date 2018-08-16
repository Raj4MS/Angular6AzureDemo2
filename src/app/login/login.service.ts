import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenModel } from './token.model';
import { LoginModel } from './login.model';


@Injectable()
export class LoginService {

    // baseUrl = 'http://localhost:49675';
    
    baseUrl = 'http://webapi2azuredemo.azurewebsites.net';
    isAuthenticated = false;

    constructor(private http: HttpClient) { }

    authenticateUser(username: string, password: string): Observable<TokenModel> {
        const model = new LoginModel();
        model.Username = username;
        model.Password = password;

        return this.http.post<TokenModel>(`${this.baseUrl}/api/Login`, model)
            .pipe(
                map(data => data)
            );
    }
}
