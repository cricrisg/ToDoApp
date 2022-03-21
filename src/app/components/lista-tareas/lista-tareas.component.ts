import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Input() listaTareas: Task[];
  @Output() borrarTarea: EventEmitter <number>

  constructor() {
    this.listaTareas= new Array();
    this.borrarTarea= new EventEmitter();

}

  ngOnInit(): void {
    console.log(this.listaTareas);
    
  }

  delete(id:number): void {
    this.borrarTarea.emit(id)
  }

}
