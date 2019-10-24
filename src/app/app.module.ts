import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; /*Algunos modulos se deben igual importar en su
componente para ser usados caracteristicas especiales y otros no, como este */
/*Componentes */
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { EmpleadoListComponent } from './empleados/empleado-list/empleado-list.component';
/*Servicios */
import { EmpleadoService } from './compartida/empleado.service';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
