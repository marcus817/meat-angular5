import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../../../restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restauranteSevice: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranteSevice.getReviewOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
