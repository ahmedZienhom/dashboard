import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemsService } from '../../core/services/items.service';
import { Iitem } from '../../core/interfaces/iitem';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-recent-orders',
  imports: [RouterLink,NgClass],
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.scss'
})
export class RecentOrdersComponent implements OnInit {
  private readonly _ItemsService = inject(ItemsService);
  items!:Iitem[];
  

  ngOnInit(): void {
    this._ItemsService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

}
