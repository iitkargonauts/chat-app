import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RoomsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoomsProvider {

  constructor(public http: Http) {
    console.log('Hello RoomsProvider Provider');
  }

  Combine(options){

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/combine', JSON.stringify(options), {headers : headers})
        .map(res => res.json())
        .subscribe(data => {
        resolve(data);
      })
    });
  }


}
