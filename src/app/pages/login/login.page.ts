import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';

import * as rutLibrary from 'rut.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private rutTest = /^((\d{1,2}(\.\d{1,3}){2})|\d{7,8})(-[\dkK])$/i;
  private numeroTest = /^\d+$/i;

  recordPassword = false;
  rut;
  password: string;

  constructor(private router: Router, private alertController: AlertController) { }

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
        this.rut = '';
        this.password = '';
      } else {
        this.rut = data.rut;
        this.password = data.password;
        this.recordPassword = true;
      }
    });
  }

  signIn() {
    if (this.rut === 'daniel' && this.password === '123' ||
      this.rut === '145678900' && this.password === '123456') {
      const rut = '145678900';
      const pass = '123456';

      if (this.recordPassword) {
        this.setDataToLocalStorage();
      }

      Plugins.Browser.open({
        url: 'https://ww5.servipag.com/pagoenlinea/PA_LoginServipag/LoginApp?USER_NAME=' +
          rut + '&PASSWORD=' + pass, windowName: '_blank'
      });

    } else {
      this.showAlert('¡Oops!', 'El usuario ingresado no existe.', ['OK']);
    }
  }

  openUrlServipag() {
    Plugins.Browser.open({ url: 'https://www.servipag.com/mobile', windowName: '_self' });
  }

  async showAlert(header: string, message: string, buttons: string[]) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header,
      message,
      buttons
    });

    await alert.present();
  }

  /*   rutFormat() {
      if (this.rut !== '') {
        let tmpRut = this.rut;
        let cont = 0;
        tmpRut = tmpRut.replace('.', '');
        tmpRut = tmpRut.replace('-', '');

        let format = '-' + tmpRut.substring(tmpRut.length - 1);
        for (let i = tmpRut.length - 2; i >= 0; i--) {
          format = tmpRut.substring(i, i + 1) + format;
          cont++;
          if (cont === 3 && i !== 0) {
            format = '.' + format;
            cont = 0;
          }
        }
        this.rut = format;
        const state = this.rutTest.test(this.rut);
      }
    } */

  rutFormat() {
    this.rut = rutLibrary.format(this.rut);
    const rutValido = rutLibrary.validate(this.rut);

    if (!rutValido) {
      document.getElementById('inputRut').style.color = 'red';
    }else{
      document.getElementById('inputRut').style.color = '#11c1e0';
    }
  }
}
