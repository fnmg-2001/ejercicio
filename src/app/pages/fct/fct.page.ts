import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fct',
  templateUrl: './fct.page.html',
  styleUrls: ['./fct.page.scss'],
})
export class FctPage implements OnInit {

  @Input() titulo: string;

  back = [
    {
      ruta: '/incio',
      img: 'home-outline'
    }

  ];

  fab = [
    {
      icon: 'logo-discord',
      link: 'https://discord.com/'
    },
    {
      icon: 'logo-youtube',
      link: 'https://www.youtube.com/?hl=es&gl=ES'
    },
    {
      icon: 'logo-twitch',
      link: 'https://www.twitch.tv/'
    },
  ];

  card = [
    {
      title: 'Card1',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida dignissim mi. Duis sit amet quam arcu. Aliquam a suscipit dolor. Maecenas blandit porttitor tortor.'
    },
    {
      title: 'Card2',
      txt: 'In mauris ligula, pretium nec nisl ac, volutpat convallis elit. Aliquam placerat venenatis dolor, in posuere lorem vestibulum at. Nunc viverra scelerisque luctus. Vestibulum eget lorem nunc.'
    },
    {
      title: 'Card3',
      txt: 'Pellentesque sit amet massa lobortis, porttitor felis non, fringilla ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      title: 'Card4',
      txt: 'Pellentesque sit amet massa lobortis, porttitor felis non, fringilla ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      title: 'Card5',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida dignissim mi. Duis sit amet quam arcu. Aliquam a suscipit dolor. Maecenas blandit porttitor tortor.'
    },
    {
      title: 'Card6',
      txt: 'In mauris ligula, pretium nec nisl ac, volutpat convallis elit. Aliquam placerat venenatis dolor, in posuere lorem vestibulum at. Nunc viverra scelerisque luctus. Vestibulum eget lorem nunc.'
    },
    {
      title: 'Card7',
      txt: 'Pellentesque sit amet massa lobortis, porttitor felis non, fringilla ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
    {
      title: 'Card8',
      txt: 'Pellentesque sit amet massa lobortis, porttitor felis non, fringilla ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
    },
  ];

  elementos = [
    {
      ruta: '/dam1',
      titulo: '1º DAM',
      icon: 'cog-outline'

    },

    {

      ruta: '/dam2',
      titulo: '2º DAM',
      icon: 'hardware-chip-outline'

    },
    {

      ruta: '/fct',
      titulo: 'FCT',
      icon: 'podium-outline'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
