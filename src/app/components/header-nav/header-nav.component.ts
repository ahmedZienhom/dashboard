import { Component, inject, PLATFORM_ID } from '@angular/core';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  imports: [SideNavComponent,RouterLink,NgClass],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _Router = inject(Router);
  isDropdownOpen:boolean = false;
  
  truggerDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      localStorage.removeItem('isLoggedIn');
      this._Router.navigate(['/login']);    
    } 
  }

}
