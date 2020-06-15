import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private browser: InAppBrowser, private callNumber: CallNumber, private router: Router) { }

  ngOnInit() {
  }

  openUrlFacebook(){
    Plugins.Browser.open({ url: 'https://www.facebook.com/servipagonline', windowName: '_self' });
  }

  openUrlTwitter(){
    Plugins.Browser.open({ url: 'https://www.twitter.com/servipagonline', windowName: '_self' });
  }

  // openUrlFacebook(){
  //   this.browser.create('https://www.facebook.com', '_blank', { toolbar: 'yes'});
  // }
  // openUrlTwitter(){
  //   this.browser.create('https://www.twitter.com', '_blank');
  // }

  callNum() {
   // this.callNumber.callNumber(Numero, false)
    this.callNumber.callNumber('123456789', false)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  returnToHome() {
    this.router.navigate(['/home']);
  }

}
