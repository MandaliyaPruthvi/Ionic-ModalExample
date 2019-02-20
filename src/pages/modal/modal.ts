import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  items = [
    { title: 'Hennessey Venom' },
    { title: 'Pagani Huayra' },
    { title: 'Buggati Veyron' }
  ]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    const data = this.navParams.get('data');
    console.log(data);
  }

  saveModal() {
    const myData = {
      name: 'Ashok',
      occupation: 'developer'
    };
    this.view.dismiss(myData);
  }

  dismiss() {
    this.view.dismiss();
  }
}
