import { ILogin } from './../../../@core/models/login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  recordPassword = false;
  user: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setDataFields();
  }

  async setDataToLocalStorage() {
    await Plugins.Storage.set({
      key: '1',
      value: JSON.stringify({ rut: '145678900', password: '123456' })
    });
  }

  async getDataFromLocalStorage() {
    const { value } = await Plugins.Storage.get({ key: '1' });
    return JSON.parse(value);
  }

  setDataFields() {
    this.getDataFromLocalStorage().then(data => {

      if (data === null) {
        this.user = '';
        this.password = '';
      } else {
        this.user = data.rut;
        this.password = data.password;
        this.recordPassword = true;
      }
    });
  }

  signIn() {
    if (this.user === 'daniel' && this.password === '123' ||
      this.user === '145678900' && this.password === '123456') {
      const rut = '145678900';
      const pass = '123456';

      if (this.recordPassword) {
        this.setDataToLocalStorage();
      }

      Plugins.Browser.open({
        url: 'https://ww5.servipag.com/pagoenlinea/PA_LoginServipag/LoginApp?USER_NAME=' +
          rut + '&PASSWORD=' + pass, windowName: '_blank'
      });

    }
  }

  openUrlServipag() {
    Plugins.Browser.open({ url: 'https://www.servipag.com/mobile', windowName: '_self' });
  }
}
