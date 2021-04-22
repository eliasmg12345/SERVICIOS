/* 
  A2 EL Servicio se ha generado con el decorador Injectable  
*/
import { Injectable } from '@angular/core';
// A6 importando
import {Persona} from '../models/persona.model';

@Injectable(
    // este providedIn dice que va estar disponible para todos los componentes
  // {providedIn: 'root'}
  
  // B8 eliminamos la opcion providedIn porque ya no queremos que este objeto se 
  //comparta y sea un unico objeto a lo largo de los componentes 
  // ejempl...aremos que el compoenente tenga su propio servicio nos vamos al ts B9


  )
export class PersonasService {

  // A3 en lugar de crear un array de personas podemos ir un poco mas alla
  // podemos crear un modelo que representa nuestro array de personas
  // entonces creamos un modelo nos vamos al ts del modulo A4

  // A7 ya no es un array de tipo indefinido sino de objeto de tipo persona
  // luego lo que tengo que hacer a este array dar la posibilidad a los componentes
  // de acceder a estos datos....lo mas comodo es atraves de metodos
  personas:Persona[]; 

  constructor() { 
    // A7
    this.personas =[
      new Persona('Viviana','Mayta',20,true),
      new Persona('Belen','Ibanez',20,false),
      new Persona('Ivana','Lazarte',21,true),
      new Persona('Sara','Vera',22,true),
    ]
  }

  // A8 si voy a recuperar todas las personas tengo que hacer getAll
  // simplemente retorna el array   ..ahora vamos aconsumirlos dentro de un componente
  // por ejemplo en component.ts A9
  getAll(){
    return this.personas;
  }

  /*B5 vamos a hacer un metodo create() que va recibir un parametro nueva persona
  que es un objeto de tipo Persona.....ahora voy a crear interacciones en el html B6*/
  create(personaNueva:Persona ){
    // le aremos un push con la nueva persona
    this.personas.push(personaNueva);
  }

  /*C2 vamos a crear un metodo que puedan filtrar las personas que esten activas 
  no necesito parametros ...ahora voy analizar que es lo que quiero que devuelva
.....lo que quiero que devuelva al fin y al cabo es una promesa entonces pongo la
clase Promise y que es lo que nos va a devolver <>   nuestro caso sera un array Persona[]*/
  activos():Promise<Persona[]>{
    // crear la promesa como todos recibe el metodo resolve y reject...aqui en la promesa
    // puedo hacer las ejecuciiones que yo quiera 
    const prom=new Promise<Persona[]> ((resolve,reject)=>{
      const arrTemp:Persona[]=[];
      for(let p of this.personas){
        if(p.activo){
          arrTemp.push(p);
        }
      }
      resolve(arrTemp);
    });
    return prom;
      // C3 ya esta creado nuestra promesa...dentro de esta hacemos lo que tenga que hacer 
      // no va interrumpir el resto de acciones....este metodo no va interrumpir al 
      // resto de acciones que tengamos definidas dentro de nuestro proceso o componente
      // AHORA en el component.hmtl vamos a recuperar a las personas qu esten activas C4
  }

  /*C6 llamo al metodo filter....este metodo reciben una funcion anonima
  el cual el parametro es cada uno de los elementos del array que estoy utilizando 
  y dentro de esta funcion anonima tengo que retornar en este caso true o false s quiero que 
  esta pesona pase el filtro o no...y alfinal resuelvo el array temporal ...
  ahora en el ts de component.ts C7*/
  activosV2():Promise<Persona[]>{
    return new Promise((resolve,reject)=>{
      resolve(this.personas.filter(person=>person.activo));
    });
  }
}
