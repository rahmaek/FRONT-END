import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
    this.getTodos()
  }

  private getTodos(){
    this.todoService.getTodoList().subscribe(data => {
      this.todos = data;
    });
  }

  updateTodoTocompleted(id: number){
    this.todoService.updateTodoTocompleted(id).subscribe(data => {
     console.log(data);
    this.getTodos();
    });
  }

  updateTodoToUcompleted(id: number){
    this.todoService.updateTodoToUcompleted(id).subscribe(data => {
      console.log(data);
    this.getTodos();
    });
  }

  deleteTodo(id: number){
    this.todoService.deleteTodo(id).subscribe( data => {
      console.log(data);
      this.getTodos();
    })
  }

}
