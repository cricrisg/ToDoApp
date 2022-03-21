import { Component, Input } from '@angular/core';
import { Task } from './interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  arrTareas: Task [];
  arrOriginal: Task [];

  constructor() {
    this.arrOriginal= new Array(
      {id:1, title: 'Esudiar', priority: 'urgente'},
      {id:2, title: 'Cocinar', priority:'diaria'},
      {id:3, title: 'Leer', priority: 'mensual'},
      {id:4, title: 'Hacer deporte', priority:'diaria'}
    )

    this.arrTareas=[...this.arrOriginal]
  }

  onDeleteTarea($event: number) {
    console.log('estoy en papa', $event);
  //   // con el id de la tarea hay que borrarla del array.
  //   this.arrTareas.forEach((tarea)=> {
  //     let index= this.arrTareas.indexOf(tarea)
  //     if(tarea.id=== $event) {
  //     this.arrTareas.splice(index, 1);
  //   } 
  // })

  // 2º opción:
  // let index: number= this.arrTareas.findIndex(tarea => tarea.id===$event);
  // this.arrTareas.splice(index,1);

  // 3º opción
    this.arrTareas = this.arrTareas.filter(tarea => {
      return tarea.id !== $event;
    })
    this.arrOriginal=[...this.arrTareas];


  }

  onAddTarea($event: Task): void {

    // console.log($event.target.value);
    let existTask:boolean= this.arrTareas.some(tarea =>
      tarea.title.toLocaleLowerCase() ===$event.title.toLocaleLowerCase() && tarea.priority ===$event.priority);
    if(!existTask) {
      this.arrTareas.push($event);
      this.arrOriginal=[...this.arrTareas];
    } else {
      alert('Tarea duplicada');
    }
    
  }

  onBusquedaTarea($event: string) {
    // console.log('papa',$event);
    if($event !=="") {
      this.arrTareas= this.arrOriginal.filter(tarea=> tarea.title.toLowerCase().includes($event.toLowerCase()));
    }else  {
      this.arrTareas= [...this.arrOriginal];
    }
    

  }
  onfiltroTarea($event: string) {
    console.log('papa', $event);
    if($event !=="") {
      this.arrTareas= this.arrOriginal.filter(tarea=> tarea.priority === $event)
    } else  {
      this.arrTareas=[...this.arrOriginal];
      }
      
    }
  }



