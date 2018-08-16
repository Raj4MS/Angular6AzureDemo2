import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AppService } from '../shared/app.service';

@Injectable()
export class CustomerGaurd implements CanActivate {

    constructor(private appService: AppService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true' ? true : false;
        if (isAuthenticated) {
            return true;
        } else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }

    }
}
