import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  private baseUrl = 'http://localhost:8081/eventmgt/register'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

 

  login(ad: AdminLogin): Observable<AdminLogin> {
    return this.http.get<AdminLogin>(`${this.baseUrl}/${ad.emailid}/${ad.password}`);
  }

}