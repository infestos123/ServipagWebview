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
      this.router.navigate(['/home']);
    }
  }

  openUrlServipag(){
    Plugins.Browser.open({ url: 'https://www.servipag.com/mobile', windowName: '_self' });
  }
}
