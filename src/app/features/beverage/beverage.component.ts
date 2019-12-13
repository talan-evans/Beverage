import { Component, OnInit, Input } from '@angular/core';
import { Beverage } from 'src/app/shared/beverage.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  @Input() beverage: Beverage;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['ingredient', this.beverage.id]);
  }

}
