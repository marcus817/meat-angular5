import { MenuComponent } from './restaurants/restaurant/restaurant-detail/menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {Routes} from '@angular/router'
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurants/restaurant/restaurant-detail/reviews/reviews.component';



export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
      children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
      ]},
  {path: 'about', component: AboutComponent}
]
