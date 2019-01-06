import { TodoItem } from './interfaces/todo-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title"> Welcome to {{title}}</h1>
    <app-todo-list></app-todo-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';
}
