import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../../restaurants.service';
import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>


  constructor(private restauranteService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restauranteService
       .getMenuItens(this.route.parent.snapshot.params['id'])


  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }
}
