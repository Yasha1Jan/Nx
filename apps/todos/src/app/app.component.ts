import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  title: string;
}
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  
  constructor(private http:HttpClient){
    this.fetch();
  }
  fetch(){
    this.http.get<Todo[]>('/api/todos').subscribe((t)=>(this.todos=t));
  }

addTodo(){

  this.http.post('/api/todos', {}).subscribe(()=>{
    this.fetch();
  })
 // this.todos.push({
   // title: `New todo ${Math.floor(Math.random() * 1000)}`,
//  });
}
}