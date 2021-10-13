import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from './config';
import {Observable} from "rxjs";
import {RestResponse} from "./restresponse";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public constructor(private http: HttpClient) {}

  postURL(resourceName: string, body: object): Observable<RestResponse> {
    const URL = API_URL + resourceName;
    return this.http.post<RestResponse>(URL, body);
  }

  getURL(productsResource: string) {
    const URL = API_URL + productsResource
    return this.http.get(URL);
  }

}

