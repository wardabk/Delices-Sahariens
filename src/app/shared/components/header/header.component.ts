import { Component, signal } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = '';
  notificationsCount: number = 1;
  isAuthenticated = signal(false) ;

  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin(); 
  }
}
