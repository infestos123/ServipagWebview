import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    if (this.user === 'daniel' && this.password === '123') {
      const rut = '145678900';
      const pass = '123456';

      Plugins.Browser.open({ url: 'https://ww5.servipag.com/pagoenlinea/PA_LoginServipag/LoginApp?USER_NAME=' +
                             rut + '&PASSWORD=' + pass, windowName: '_blank' });
    }
  }

  openUrlServipag(){
    Plugins.Browser.open({ url: 'https://www.servipag.com/mobile', windowName: '_self' });
  }
}
