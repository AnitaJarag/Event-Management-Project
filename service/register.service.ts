import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:8081/eventmgt/register'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  newUser(reg: Register): Observable<Register> {
    return this.http.post<Register>(`${this.baseUrl}`, reg); // Fixed template literal usage
  }

  login(reg: Register): Observable<Register> {
    return this.http.get<Register>(`${this.baseUrl}/${reg.emailid}/${reg.password}`);
  }

  getAll(): Observable<Register[]> {
    return this.http.get<Register[]>(this.baseUrl); // Corrected to use baseUrl directly
  }
}



























