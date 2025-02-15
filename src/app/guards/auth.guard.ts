
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { inject } from '@angular/core'



export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getCurrentUser();

  if (user && user.role === 'client') {
    return true; // ✅ Accès autorisé pour l'admin
  } else {
    alert(" Accès refusé ! Vous devez être connecté en tant que client.");
    router.navigate(['/']); // 🔄 Redirection des non-admins
    return false;
  }
};


