import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona.model';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  // B10
  providers:[PersonasService],
})
export class ListaComponent implements OnInit {

  // B3 
  arrPersonas:Persona[];
  
  
  /*B2   lo primero que tengo que hacer siempre que tenga un servicio INYECTARLO 
  no olvidando su autoimportacion */
  constructor(private personasService:PersonasService) { }

  // B3 aqui rescato esas personas y coloca en la variable arrPersonas
  // luego mostramos con <ul> en el html B4 
  ngOnInit(): void {
    this.arrPersonas=this.personasService.getAll();
  }

}
