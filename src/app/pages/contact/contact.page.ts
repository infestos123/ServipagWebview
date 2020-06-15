import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private browser: InAppBrowser, private callNumber: CallNumber) { }

  ngOnInit() {
  }

  openUrlFacebook(){
    this.browser.create('https://www.facebook.com', '_blank');
  }
  openUrlTwitter(){
    this.browser.create('https://www.twitter.com', '_blank');
  }

  callNum() {
   // this.callNumber.callNumber(Numero, false)
    this.callNumber.callNumber('123456789', false)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
