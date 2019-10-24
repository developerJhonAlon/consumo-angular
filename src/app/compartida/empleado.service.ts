import { Injectable } from '@angular/core';

import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  /*Debo generar memoria porque sino da error enla consola web, a las clases se deben dar memoria
  porque no se declaran en app.module.ts como los servicios y componentes queno necesitan ser 
  generados memoria porque lo estan en ese archivo */
  formData:Empleado = new Empleado();

  constructor() { }
}
