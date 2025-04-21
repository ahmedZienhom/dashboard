import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemsService } from '../../core/services/items.service';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { Iproduct } from '../../core/interfaces/IProduct';

@Component({
  selector: 'app-recent-orders',
  imports: [RouterLink,NgClass,DatePipe,CurrencyPipe],
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent implements OnInit {
  private readonly _ItemsService = inject(ItemsService);
  items!:Iproduct[];
  

  ngOnInit(): void {
    this._ItemsService.getItems().subscribe((data) => {
      this.items = data.products;
      this.items.map((item) => {
      })
    });
  }

}
