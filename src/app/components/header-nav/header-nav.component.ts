import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  imports: [SideNavComponent,RouterLink,NgClass],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent implements OnInit {

  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _Router = inject(Router);
  isDropdownOpen:boolean = false;
  name!:string;

  ngOnInit(): void {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      this.name = localStorage.getItem('name') !;
      console.log(this.name);
      
    }
  }


  truggerDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('name');
      this._Router.navigate(['/login']);    
    } 
  }

}
