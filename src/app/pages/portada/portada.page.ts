import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {

  items: Array<{text:'Boruto Uzumaki',src:'../../assets/portada.jpg'}>;

  constructor() { }

  ngOnInit() {
  }

}
