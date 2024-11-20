import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
 
    
    private baseUrl:string="http://localhost:8081/eventmgt/feedback"
  constructor( private http:HttpClient) { }
  newFeedback(f:Feedback):Observable<Feedback>{
    return this.http.post<Feedback>(`${this.baseUrl}`,f)
  }
  getAll():Observable<Feedback[]>
  {
    return this.http.get<Feedback[]>(`${this.baseUrl}`);
  }
}