import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  personajes: any = [
    {
      img: '../../../assets/sarada.png',
      nombre: 'Sarada',
      edad: 12,
      clan: 'Uchiha',
      descripcion: 'es una ninja ejemplar con buenos dotes'
    },
    {
      img: '../../../assets/boruto.png',
      nombre: 'Boruto',
      edad: 12,
      clan: 'Uzumaki',
      descripcion: 'es el protagonista del anime "Boruto: Nex-Generation" y tiene un futuro ligeramente prmetedor'
    },
    {
      img: '../../../assets/metal.png',
      nombre: 'Metal',
      edad: 13,
      clan: 'Lee',
      descripcion: 'es un ninja de la aldea de la hoja, experto en las artes marciales'
    }
];

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async viewPerson(e){
    const alert = await this.alertCtrl.create({
      header: 'Detalles de personaje',
      subHeader: `${e.nombre}`,
      message: `${e.nombre} tiene ${e.edad} años y ${e.descripcion}`,
      buttons: [{
        text: 'Cerrar a ' + e.nombre,
        role: 'OK',
        cssClass: 'secondary',
        // id: 'cancel-button',
        // handler: (blah) => {
        //   console.log('Confirm Cancel: blah');
        // }
      }]
    });
    await alert.present();
  }

}
