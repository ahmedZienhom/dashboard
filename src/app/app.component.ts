import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from "./components/header-nav/header-nav.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { DashBoardComponent } from "./components/dash-board/dash-board.component";
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './core/services/flow-bite.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'dashBoard';
  private readonly  flowbiteService = inject(FlowbiteService);


  
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
