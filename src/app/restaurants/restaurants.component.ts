import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restauranteService: RestaurantService ) { }

  ngOnInit() {
     this.restauranteService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
