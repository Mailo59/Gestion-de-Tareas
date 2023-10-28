import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  nombreTarea: string = '';
  listaTareas: Tarea[] = [];
  tareasTerminadas: Tarea[] = [];

  // Método para filtrar las tareas terminadas
  filtrarTareasTerminadas() {
    this.tareasTerminadas = this.listaTareas.filter(tarea => tarea.estado);
    console.log('Tareas terminadas:', this.tareasTerminadas); // Imprime las tareas terminadas en la consola

  }
  nuevaTarea() {
    console.log(this.nombreTarea);
    this.filtrarTareasTerminadas();
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listaTareas.push(tarea);
    this.nombreTarea = '';
    console.log(this.listaTareas);
  }

  actualizarTarea (tarea: Tarea, index: number) {
    this.listaTareas[index].estado = !tarea.estado;
    this.filtrarTareasTerminadas(); // Llama a esta función después de actualizar el estado de la tarea


  }

  eliminarTarea (index: number) {
    this.listaTareas.splice(index, 1);
    this.filtrarTareasTerminadas(); // Llama a esta función después de eliminar la tarea

  }

}
