import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // Vérifie si les mots de passe correspondent
    if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
      this.signupForm.get('confirmPassword')?.setErrors({ mismatch: true });
    }

    if (this.signupForm.valid) {
      console.log('Formulaire soumis avec succès !', this.signupForm.value);
    }
  }
}
