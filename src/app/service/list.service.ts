import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface List {
  listID?: number; // Optional for when creating a new list
  userID: number;
  list_title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:5000/lists';

  constructor(private http: HttpClient) { }

  getLists(userID: number): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiUrl}?userID=${userID}`);
  }

  addList(list: Omit<List, 'listID'>): Observable<List> {
    return this.http.post<List>(this.apiUrl, list);
  }

  editList(list: List): Observable<List> {
    return this.http.put<List>(this.apiUrl, list);
  }


  deleteList(listID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${listID}`);
  }

  getList(listID: number): Observable<List> {
    return this.http.get<List>(`${this.apiUrl}/${listID}`);
  }

}

