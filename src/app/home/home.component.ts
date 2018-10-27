import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from './../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  dishErrorMessage: string;
  promotion: Promotion;
  promotionErrorMessage: string;
  leader: Leader;
  leaderErrorMessage: string;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe((dish) => this.dish = dish,
        errormessage => this.dishErrorMessage = <any>errormessage);
    this.promotionService.getFeaturedPromotion()
      .subscribe((promo) => this.promotion = promo,
        errormessage => this.promotionErrorMessage = <any>errormessage);
    this.leaderService.getFeaturedLeader()
      .subscribe((leader) => this.leader = leader,
        errormessage => this.leaderErrorMessage = <any>errormessage);
  }

}
