import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  id1 = 1;
  constructor() {
  }

  ngOnInit() {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this.id1++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }
}
