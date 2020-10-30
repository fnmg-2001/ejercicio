import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  @Input() titulo: string;

  elementos = [
    {
      titulo: '1º DAM',
      icon: 'cog-outline',
      tab: 'dam1'

    },

    {
      titulo: '2º DAM',
      icon: 'hardware-chip-outline',
      tab: 'dam2'

    },
    {
      titulo: 'FCT',
      icon: 'podium-outline',
      tab: 'fct'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
