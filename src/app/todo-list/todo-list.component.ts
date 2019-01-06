import { TodoListService } from './../services/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-list',
  template: `
  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }
​
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoList.push({ title });
  }

}
