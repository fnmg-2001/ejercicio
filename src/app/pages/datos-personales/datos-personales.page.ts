import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage{

  @Input() titulo: string;

  elementos = [
    {
      nombre: 'Francisco Nieto-Márquez Guijarro',
      localidad: 'Manzanares',
      estudios: '2º DAM',
      email: 'paconieto14@gmail.com',
      contrasena: 'asdasd'

    }
  ];
  constructor() { }



}
