import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}


  getTasks(listID: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?listID=${listID}`);
  }

  deleteTask(taskID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskID}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}`, task);
  }

}
