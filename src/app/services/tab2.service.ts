import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class Tab2Service {
  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

    getResponse(): Observable<any> {
     return this.http.get('http://jsonplaceholder.typicode.com/posts')
     .map((res) => res);
   }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }

  getresponse(): Observable<any> {
    return this.http.get('wrongURL')
    .map((res) => res);
  }

  // GetResponse(): Observable<any> {
  //   return this.http.get('http://jsonplaceholder.typicode.com/posts')
  //   .map((res) => this.http.get('http://jsonplaceholder.typicode.com/posts'))
  //   .map((res) => res);
  // }

  GetResponse(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .map((res) => this.http.get('http://jsonplaceholder.typicode.com/posts'))
    .mergeMap((res) => res);
  }

}
