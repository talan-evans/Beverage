import { Component, OnInit, OnDestroy } from '@angular/core';
import { Beverage } from 'src/app/shared/beverage.model';
import { ActivatedRoute } from '@angular/router';
import { BeverageService } from 'src/app/core/beverage.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit, OnDestroy {

  private beverage: Beverage;

  constructor(
    private route: ActivatedRoute,
    private beverageService: BeverageService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('changed');
      let id: number = +paramMap.get('id');
      this.beverage = this.beverageService.getBeverageById(id);
    })
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
