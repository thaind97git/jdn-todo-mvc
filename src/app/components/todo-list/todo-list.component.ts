import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todo$: Observable<Todo[]>;

  constructor(private todoSevice: TodoService) { }

  ngOnInit() {
    this.todo$ = this.todoSevice.todos$;
  }

  onChangeTodoStatus(todo: Todo) {
    this.todoSevice.changeTodoStatus(todo.id, todo.isCompleted);
  }

  onEditTodo(todo: Todo) {
    this.todoSevice.editTodo(todo.id, todo.content);
  }

  onDeleteTodo(todo: Todo) {
    this.todoSevice.removeTodo(todo.id);
  }

}
