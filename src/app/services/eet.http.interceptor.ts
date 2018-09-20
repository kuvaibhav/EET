import { ToasterService } from './toaster.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class EETHttpInterceptor implements HttpInterceptor {

  constructor(private toaster: ToasterService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({})).do(
      (httpEvent: HttpEvent<any>) => {
      },
      (errorResponse: any) => {
        this.toaster.showError(errorResponse);
      });
  }

}
