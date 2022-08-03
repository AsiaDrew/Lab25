
import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chirpuspizza';

  items: MenuItem[] = [
    {item: `10pc Grilled Tenders`, category: `dinner`, price: 14.99},
    {item: `Large Pizza 4 Toppings`, category: `dinner`, price: 14.99},
    {item: `5pc Whole Wings w/ Fries`, category: `dinner`, price: 6.99},
    {item: `10pc Wing Dings w/ Fries`, category: `dinner`, price: 8.99},
    {item: `Philly Cheesesteak Sub`, category: `subs`, price: 8.99},
    {item: `Grilled Chicken Sub`, category: `subs`, price: 8.99},
    {item: `Taco Sub`, category: `subs`, price: 6.99},
    {item: `Ceasar Salad`, category: `salads`, price: 5.99},
    {item: `House Salad`, category: `salads`, price: 4.99},
    {item: `Cobb Salad`, category: `salads`, price: 9.99},
    {item: `Breadsticks`, category: `sides`, price: 4.99},
    {item: `Cheesesticks`, category: `sides`, price: 3.99},
    {item: `BBQ Fries`, category: `sides`, price: 2.99},
    {item: `Fries`, category: `sides`, price: 2.99},
    {item: `Chilli Cheese Fries`, category: `sides`, price: 6.99},
    {item: `2 Liter soda`, category: `beverages`, price: 2.99},
    {item: `Sweet Iced Tea 32oz`, category: `beverages`, price: 1.99},
    {item: `Cinnamon Roll`, category: `dessert`, price: 4.99},
    {item: `Cake`, category: `dessert`, price: 3.99}
  ];
}