import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { notauthGuard } from './core/guards/notauth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./layouts/blank-layout/blank-layout.component').then(m => m.BlankLayoutComponent),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./components/dash-board/dash-board.component').then(m => m.DashBoardComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./components/orders/orders.component').then(m => m.OrdersComponent),
        title: 'Orders'
      },
      {
        path: 'users',
        loadComponent: () => import('./components/orders/orders.component').then(m => m.OrdersComponent),
        title: 'Users'
      },
      {
        path: 'items',
        loadComponent: () => import('./components/items/items.component').then(m => m.ItemsComponent),
        title: 'Items'
      },
      {
        path: 'transactions',
        loadComponent: () => import('./components/tranactions/tranactions.component').then(m => m.TranactionsComponent),
        title: 'Transactions'
      },
      {
        path: 'reports',
        loadComponent: () => import('./components/reports/reports.component').then(m => m.ReportsComponent),
        title: 'Reports'
      },
      {
        path: 'message',
        loadComponent: () => import('./components/message/message.component').then(m => m.MessageComponent),
        title: 'Message'
      },
      {
        path: 'support',
        loadComponent: () => import('./components/support/support.component').then(m => m.SupportComponent),
        title: 'Support'
      },
      {
        path: 'settings',
        loadComponent: () => import('./components/settings/settings.component').then(m => m.SettingsComponent),
        title: 'Settings'
      },
      {
        path: 'help',
        loadComponent: () => import('./components/help/help.component').then(m => m.HelpComponent),
        title: 'Help'
      }
    ]
  },
  {
    path: '',
    canActivate: [notauthGuard],
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () => import('./components/sign-in/sign-in.component').then(m => m.SignInComponent),
        title: 'Login'
      },
      {
        path: 'register',
        loadComponent: () => import('./components/sign-up/sign-up.component').then(m => m.SignUpComponent),
        title: 'Register'
      },
      {
        path: 'forget',
        loadComponent: () => import('./components/forget-password/forget-password.component').then(m => m.ForgetPasswordComponent),
        title: 'forgetpassword'
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./components/notfound/notfound.component').then(m => m.NotfoundComponent),
    title: 'Not Found'
  }
];
