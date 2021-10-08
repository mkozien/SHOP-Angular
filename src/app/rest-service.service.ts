import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from './config';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public constructor(private http: HttpClient) {}

  postURL(resourceName: string, body: object) {
    const URL = API_URL + resourceName;
    return this.http.post(URL, body, {responseType: 'text'})
      .subscribe(
        response => JSON.parse(response)
      )
  }
}
