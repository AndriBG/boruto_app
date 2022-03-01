import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal.page';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage {

  moments: Array<object> = [
    {
      img: '../../../assets/momo_img.jpg',
      video: '../../../assets/naruto_momoshiki.mp4',
      titulo: 'Momoshiki vs Naruto y Sasuke',
      descripcion: 'En esta parte los legendarios protagonistas del anime de Naruto, nos muestran en conpás de que son capaces al enfrentarse con un enemigo galático muy poderoso, donde lo acorralan hasta que se enfurece.'
    },
    {
      img: '../../../assets/misuki_img.png',
      video: '../../../assets/misuki.mp4',
      titulo: 'Misuki le quita el pergamino a orochimaru',
      descripcion: 'Mientras Orochimaru y Misuki adulto discuten, Misuki niño muy confundido qué es lo que está pasando se molesta y despierta el modo sabio quitándole el pergamino a su padre con una velocidad impresionante.'
    },
    {
      img: '../../../assets/kawaki_img.jpg',
      video: '../../../assets/kawaki.mp4',
      titulo: 'Kawaki vs Garo',
      descripcion: 'Kawaki un ninja futurista de este anime, vemos aquí como sin pieda le quita la vida a un tipo llamado Garo, con el poder del "Karma".'
    }
];

  constructor(private modal: ModalController) { 

  }

  async viewMoment(e){
    const modal = await this.modal.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      breakpoints: [0, 0.25, 0.5, 0.75, 1],
      keyboardClose: false,
      // handle: true,
      // htmlAttributes: ModalAttributes,
      // leaveAnimation:  (ba: any) => ,
      componentProps: {
        video: e.video,
        title: e.titulo,
        descripcion: e.descripcion
      }
    });
    return await modal.present();
  }

}
