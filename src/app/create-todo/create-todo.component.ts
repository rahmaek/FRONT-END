import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo = new Todo();

 constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
  }

  saveTodo(){
    this.todoService.createTodo(this.todo.name).subscribe( data =>{
      console.log(data);
      this.goToTodoList();
    },
    error => console.log(error));
  }

  goToTodoList(){
    this.router.navigate(['/todo']);
  }
  
  onSubmit(){
    console.log(this.todo);
    this.saveTodo();
  }

}
