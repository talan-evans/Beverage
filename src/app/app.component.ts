import { Component, OnInit } from '@angular/core';
import { BeverageService } from './core/beverage.service';
import { Beverage } from './shared/beverage.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private beverageService: BeverageService,
    private router: Router
  ) {}

  private beverageList: Beverage[] = [];
  title = 'beverages';

  ngOnInit() {
    this.beverageList = this.beverageService.getAllBeverages();
  }

  navigate() {
    this.router.navigate(['login']);
  }
}
