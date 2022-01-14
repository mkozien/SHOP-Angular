import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, HEADERS } from '../config';
import { Observable } from "rxjs";
import { RestResponse } from "../models/restresponse";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public constructor(private http: HttpClient) {}

  postURL(resourceName: string, body: object): Observable<RestResponse> {
    const URL = API_URL + resourceName;
    return this.http.post<RestResponse>(URL, body);
  }

  getURL(productsResource: string): Observable<RestResponse> {
    let headers = new HttpHeaders(HEADERS);
    const requestOptions = {headers: headers}
    const URL = API_URL + productsResource
    return this.http.get<RestResponse>(URL, requestOptions);
  }

}

