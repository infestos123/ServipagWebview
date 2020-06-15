import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  openUrlServipag(){
    Plugins.Browser.open({ url: 'https://www.servipag.com/mobile', windowName: '_self' });
  }
}
