import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000';
  private userIdSource = new BehaviorSubject<number | null>(null);
  userId$ = this.userIdSource.asObservable();

  constructor(private http: HttpClient) { }

  getUserID(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUserID/${username}`);
  }

  setUserId(id: number) {
    console.log('Setting user ID:', id);
    this.userIdSource.next(id);
  }
}
