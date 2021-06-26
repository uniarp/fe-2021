import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  emHome : boolean;

  constructor(public routerService : Router) {
    this.emHome = this.routerService.url == "/home/dashboard";
  }

  ngOnInit() {
  }

}
