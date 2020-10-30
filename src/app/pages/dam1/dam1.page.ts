import { Component, OnInit, NgModule, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})

export class Dam1Page implements OnInit {

  @Input() titulo: string;

  back = [
    {
      nombre: 'DAM 1',
    }

  ];

  elementos = [
    {
    titulo: '1º DAM',
    icon: 'cog-outline'},

    {
    titulo: '2º DAM',
    icon: 'hardware-chip-outline'},

    {
    titulo: 'FCT',
    icon: 'podium-outline'}
  ];
  constructor(public toastCtrl: ToastController) { }
  async openToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
