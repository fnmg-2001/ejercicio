import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage{

  @Input() titulo: string;

elementos = [
    {
      ruta: '/datos-personales',
      titulo: 'Datos Personales',
      color: 'success',

    },

    {
      ruta: '/cursos',
      titulo: 'Cursos',
      color: 'primary',

    }
  ];
  constructor() { }


}
