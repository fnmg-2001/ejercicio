import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam2',
  templateUrl: './dam2.page.html',
  styleUrls: ['./dam2.page.scss'],
})
export class Dam2Page implements OnInit {

  @Input() titulo: string;

  back = [
    {
      ruta: '/incio',
      img: 'home-outline'
    }

    ];

    lista = [
      {nombre: 'Programacion',
      img: 'https://img2.freepng.es/20180627/etu/kisspng-computer-icons-computer-programming-user-interface-browser-icon-5b336e98497711.6057089715300973043009.jpg',
      isChecked: true,
      color: 'primary'},
      {nombre: 'Bases de datos',
      img: 'https://www.flaticon.es/svg/static/icons/svg/1420/1420398.svg',
      isChecked: true,
      color: 'secondary'},
      {nombre: 'Entornos de Desarrollo',
      img: 'https://jamj2000.github.io/entornosdesarrollo/entornosdesarrollo.png',
      isChecked: true,
      color: 'danger'},
      {nombre: 'Lenguajes de Marca',
      img: 'https://img2.freepng.es/20180425/rse/kisspng-html-computer-icons-5ae0b5fc133303.8575417015246760920787.jpg',
      isChecked: true,
      color: 'light'},
      {nombre: 'Sistemas Informaticos',
      img: 'https://previews.123rf.com/images/magurok/magurok1404/magurok140400152/27381834-vector-unidad-del-sistema-inform%C3%A1tico-y-el-icono-del-monitor.jpg',
      isChecked: true,
      color: 'dark'},
      {nombre: 'Formacion y Orientacion Laboral',
      img: 'https://folinloveblog.files.wordpress.com/2019/01/cropped-logos-fol-e-idiomas-01.png',
      isChecked: true,
      color: 'primary'},
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

  constructor(public toastCtrl: ToastController) { }
  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'It is a Toast Notification',
      duration: 5000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
