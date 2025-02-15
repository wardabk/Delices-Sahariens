import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}


  // 🔐 Vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user && user.role === 'admin';
  }

  // 🔑 Connexion (stocke les infos de l'utilisateur)
  login(email: string, password: string): boolean {
    let role = '';

    if (email === 'admin@gmail.com' && password === '123456') {
      role = 'admin';
    } else if (email === 'client@gmail.com' && password === '123456') {
      role = 'client';
    } else {
      return false;
    }

    // Enregistrer les informations avec le rôle
    localStorage.setItem('user', JSON.stringify({ email, role }));
    return true;
  }

  // 🚪 Déconnexion (supprime les infos de l'utilisateur)
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  // 👤 Récupérer l'utilisateur connecté
  getCurrentUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
