import { Component } from '@angular/core';

@Component({
    template: `
    <h2>Unauthorized</h2>
    <br>
    <a [routerLink]="['/login']">Re-Login</a>
    `
})
export class UnAuthorizedComponent {

}
