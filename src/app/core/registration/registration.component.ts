import { Component, inject, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-registration',
  imports: [
    Dialog,
    Button,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    InputText
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  public visibility: InputSignal<boolean> = input<boolean>(false);
  public closeEvent: OutputEmitterRef<boolean> = output<boolean>();
  public loginForm: FormGroup;

  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  constructor() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public submitForm(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .then((res) => {
          this.authService.setLogin(res);
          this.closeModal();
          this.router.navigate(['news']);
        })
        .catch((err) => {
          console.log(err);
          alert("Ocorreu um erro!")
        })
    } else {
      alert('form inválido')
    }
  }

  public closeModal(): void {
    this.closeEvent.emit(false);
  }
}

