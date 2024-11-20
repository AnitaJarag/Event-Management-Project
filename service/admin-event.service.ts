import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminEventService {
  private baseUrl = 'http://localhost:8081/eventmgt/events';

  constructor(private http: HttpClient) {}

  // Create Event
  createEvent(event: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, event); // Correct template literal syntax
  }

  // Get All Events
  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}`); // Specify return type
  }

  // Delete Event
  deleteEvent(eventId: number): Observable<Object> {
    console.log(`@@@ Deleting event: ${this.baseUrl}/${eventId}`); // Updated method name
    return this.http.delete(`${this.baseUrl}/${eventId}`); // Correct template literal syntax
  }
}
