import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
 isAdmin : boolean = false ;

 constructor(private authservice :AuthService)
 {
  const user = this.authservice.getCurrentUser();
this.isAdmin = user && user.role === 'admin';

  console.log(this.isAdmin);
 }
}
