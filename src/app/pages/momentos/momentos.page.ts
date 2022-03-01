import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {

  moments: any = [
    {
      img: '../../../assets/sarada.png',
      titulo: 'Momoshiki vs Naruto y Sasuke',
      descripcion: 'En esta parte los legendarios protagonistas del anime de Naruto, nos muestran en conpás de que son capaces al enfrentarse con un enemigo galático muy poderoso, donde lo acorralan hasta que se enfurece.'
    },
    {
      img: '../../../assets/boruto.png',
      titulo: 'Misuki le quita el pergamino a orochimaru',
      descripcion: 'Mientras Orochimaru y Misuki adulto discuten, Misuki niño muy confundido qué es lo que está pasando se molesta y despierta el modo sabio quitándole el pergamino a su padre con una velocidad impresionante.'
    },
    {
      img: '../../../assets/metal.png',
      titulo: 'Kawaki vs Garo',
      descripcion: 'Kawaki un ninja futurista de este anime, vemos aquí como sin pieda le quita la vida a un tipo llamado Garo, con el poder del "Karma".'
    }
];

  constructor(private alert: AlertController) { }

  ngOnInit() {
  }

  async viewPerson(e){
    const alert = await this.alert.create({
      header: 'Detalles de personaje',
      subHeader: `${e.nombre}`,
      message: `${e.nombre} tiene ${e.edad} años y ${e.descripcion}`,
      buttons: [{
        text: 'Cerrar a ' + e.nombre,
        role: 'OK',
        cssClass: 'secondary',
      }]
    });
    await alert.present();
  }

}
