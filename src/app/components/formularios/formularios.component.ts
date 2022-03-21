import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  @Output() nuevaTarea: EventEmitter<Task>;
  newTask: Task;
  id:number= 4;

  constructor() { 
    
    this.newTask = {
      id: 0 ,
      title:"",
      priority:""
    }
    this.nuevaTarea= new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarTarea() {
    
    if(this.newTask.title !== "" && this.newTask.priority !== "") {
      this.newTask.id= this.id;
      this.nuevaTarea.emit(this.newTask);
      this.newTask = {id: 0 , title:"", priority:"" }
      this.id++;
    }else  {
      alert('Los campos no pueden estar vacíos');
    }
    
    
  }

}
