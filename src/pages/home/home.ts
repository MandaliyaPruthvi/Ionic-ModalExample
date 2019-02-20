import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private modal: ModalController) {

  }

  openModal(){

    const myData = {
      name: 'Pruthvi',
      occupation: 'developer'
    };

    const myModal = this.modal.create('ModalPage',{data: myData});

    myModal.present();

    myModal.onWillDismiss((data)=>{
      console.log(data);
    });
  }

}
