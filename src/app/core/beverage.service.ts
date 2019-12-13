import { Injectable } from '@angular/core';
import { Beverage } from '../shared/beverage.model';

const BEVERAGES: Beverage[] = [
  {
    id: 1,
    name: "Cape Cod",
    ingredients: [
      "vodka",
      "cranberry juice"
    ]
  },
  {
    id: 2,
    name: "Old Fashioned",
    ingredients: [
      "bourbon",
      "bitters",
      "orange peel"
    ]
  },
  {
    id: 3,
    name: "Screwdriver",
    ingredients: [
      "vodka",
      "orange juice"
    ]
  }
]

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  constructor() { }

  getAllBeverages(): Beverage[] {
    return BEVERAGES;
  }

  getBeverageById(id: number): Beverage {
    return BEVERAGES.find(b => b.id === id);
  }
}
