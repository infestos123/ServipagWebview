import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {

  constructor(private router: Router) { }

  returnToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {}

}
