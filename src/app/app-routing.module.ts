import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'todo', component: ListTodoComponent},
  {path: 'create-todo', component: CreateTodoComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
