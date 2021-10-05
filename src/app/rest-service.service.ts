import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {API_URL, HEADERS} from './config';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private headers = new HttpHeaders(HEADERS);

  public constructor(private http: HttpClient) {}


}
