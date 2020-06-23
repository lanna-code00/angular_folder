import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  todoText: string;
  todo = "";
  todoArr = [];
  anothertodo;
  todoKeys;
  todoLocal;
  obj;

  constructor(private todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

  edit(edit){
    this.anothertodo = edit;
    this.todo = this.todoArr[edit].todo;
  }
  editModal(){
   this.todoArr[this.anothertodo] =  {todo: this.todo};
   this.todo = "";
  }

  private addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = '';
  }
}
