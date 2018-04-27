import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  items(): any[] {
     return this.shoppingCartService.items;
  }

  clear() {
    this.shoppingCartService.clear();
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item);
  }

  total(): number {
    return this.shoppingCartService.total()
  }
}
