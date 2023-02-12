import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseURL = "http://localhost:8080/api/todo";

  constructor(private httpClient: HttpClient) { }

  getTodoList(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.baseURL}`+ "/listTodo");
  }

  createTodo(title: string): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create/${title}`, null);
  }

  updateTodoTocompleted(id: number): Observable<Todo[]>{
    return this.httpClient.post<Todo[]>(`${this.baseURL}/completed/${id}`, null);
  }

  updateTodoToUcompleted(id: number): Observable<Todo[]>{
    return this.httpClient.post<Todo[]>(`${this.baseURL}/uncompleted/${id}`, null);
  }
  

  deleteTodo(id: number): Observable<Todo[]>{
    return this.httpClient.delete<Todo[]>(`${this.baseURL}/delete/${id}`);
  }
}
