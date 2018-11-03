import { DishService } from './../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { flyInOut, expand } from '../animations/animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    expand(),
    flyInOut()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMessage: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes,
        errmessage => this.errMessage = <any>errmessage);
  }

}
