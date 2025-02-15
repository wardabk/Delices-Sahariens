import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,



  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],

  providers: [ProductService],
  exports : [
    HeaderComponent,
    FooterComponent

  ]
})
export class SharedModule { }
