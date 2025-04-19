import { Component } from '@angular/core';
import { HeaderNavComponent } from "../../components/header-nav/header-nav.component";
import { DashBoardComponent } from "../../components/dash-board/dash-board.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  imports: [HeaderNavComponent, RouterOutlet],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
