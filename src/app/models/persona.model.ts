// A4 para que la clase tengamos que exportar ponemos export class Persona
// y generamos las propiedades de la clase

export class Persona{
    nombre:string;
    apellidos:string;
    edad:number;
    activo:boolean;
    constructor(pNombre:string,pApellidos:string,pEdad:number,pActivo:boolean){
        this.nombre=pNombre;
        this.apellidos=pApellidos;
        this.edad=pEdad;
        this.activo=pActivo;
        // A5 ahora en el ts servicios importamos esta clase A6
    }

}