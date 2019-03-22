import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
// import * as cv from 'opencv4nodejs';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  // cvcap = new cv.VideoCapture(0);
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
