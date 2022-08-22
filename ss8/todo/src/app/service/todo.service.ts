import {Injectable} from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Todo[] = [];

  constructor(private httpClients: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.httpClients.get<Todo[]>('http://localhost:3000/todo');
  }
}
