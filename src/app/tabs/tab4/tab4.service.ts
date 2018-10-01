import { CityModel } from './reactive-form/city.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Tab4Service {

  constructor(private http: HttpClient) { }

  public fetchCities(): Observable<CityModel[]> {
    return this.http
      .get('rest/tab4/fetchCities')
      .map((res: CityModel[]) => res);
  }

  public savePersonalInfo(personalInfoDetails) {
    return this.http
      .post('rest/tab4/savePersonalInfo', personalInfoDetails);
  }
}
