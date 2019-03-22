import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import * as cv from 'opencv4nodejs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fps = 30;
  // cvcap = new cv.VideoCapture(0);
  constructor(public navCtrl: NavController) {

  }

}
