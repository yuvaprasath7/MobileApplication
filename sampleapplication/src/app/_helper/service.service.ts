import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  postInput(body: any): Observable<any> {
    return this.http.post("https://63183522ece2736550c35b92.mockapi.io/edit", body);
  }
}
