import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // B9 dentro del decorador component tenemos una propiedad providers
  // y tengo que pasar un array copn todos los servicios que quiero utilizar 
  // dentro de este componente por ejemplo el servicio Personas PersonasService
  // lo mismo puedo hacer para la lista.ts B10
  providers:[PersonasService],
})
export class AppComponent {
  
  /* A11 podemos crearnos un array arrPersonas 
  ahora como tengo en esta variable como propiedad de la clase lo puedo usar en html A12*/

  arrPersonas :Persona[];


  /*
    A9 ES MUy sencillo lo unico que tenemos que hacer es inyectar este componente
    dentro de nuestro constructor...dentro de constructor de donde queremos utilizarlo
    inyectamos el componente ..pero ojo siempre importando
  */
 constructor(private personasService:PersonasService){}

 /* A10 una vex inyectado ya podemos interactuar con el ejem. el ngOnInit()
 y llamar al metodo getAll().. con esto el servicio se ecarga de devolverme los datos
 y esto pasa en cualquier componente
  */
 ngOnInit(){
  this.arrPersonas=this.personasService.getAll(); 
 }

//  B7 como el servicio lo tengo inyectado simplemente lo tengo que utilizar
// ?como hacemos que cada componente tenga su propio array
// primero tenemos que ir al servicio y tenemos que eliminar la opcion de provider B8
 onClick(){
  //  esto lo que hace es agregar al array una nueva persona 
  this.personasService.create(new Persona('Nueva','Garcia',30,true));
  
 }

/*C5 ahora voy a consumir la promesa....la cual podemo consumir de dos maneras
forma tradicional con then-catch
forma moderna sinc*/

// forma tradicional:
/* onClickActivas(){
  
  this.personasService.activos()
  .then(arrTempPersonas=>console.log(arrTempPersonas))
  .catch(error=>console.log(error));
  
} */

// Forma async await :
async onClickActivas(){
  // oye espera a este ejecucion y cuando acabe haces las siguientes lineas a continuiacion
  // con esto a diferencia de anterior lo puedo visualizar en la tabla
  try{
    this.arrPersonas=await this.personasService.activosV2();
  }catch(error){
    console.log(error);
  }
  // una ves probado en el navegador.....ahora si queremos modificar el metodo que
  //  hicimos en el servicio ...nos vamos al servicio C6
}
}
