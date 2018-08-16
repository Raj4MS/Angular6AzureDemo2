import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './shared/app.service';
import { CustomerGaurd } from './customer/customer.gaurd';
import { ErrorComponent } from './error.component';
import { UnAuthorizedComponent } from './unauthorized.component';
import { HeaderInterceptor } from './shared/header.interceptor';
import { CacheInterceptor } from './shared/cache.interceptor';
import { HttpCacheService } from './shared/http-cache.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    UnAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
      { path: 'customer', loadChildren: '../app/customer/customer.module#CustomerModule', canActivate: [CustomerGaurd] },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'unauthorized', component: UnAuthorizedComponent },
      { path: '**', component: ErrorComponent },
    ], { enableTracing: false })
  ],
  providers: [
    AppService,
    HttpCacheService,
    CustomerGaurd,
    {
      provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
