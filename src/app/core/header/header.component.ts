import { Component, inject, output, OutputEmitterRef } from '@angular/core';
import { Button } from 'primeng/button';
import { AuthService } from '../security/auth.service';
import { UserMenuComponent } from "./user-menu/user-menu.component";

@Component({
  selector: 'app-header',
  imports: [
    Button,
    UserMenuComponent
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private authService:AuthService = inject(AuthService);
  protected isAuthenticated: boolean = false;
  public openSign:OutputEmitterRef<void> = output<void>();

  constructor() {
    this.authService.loggedIn.subscribe({
      next: (value:boolean) => {
        this.isAuthenticated = value;
      }
    })
  }

  public openSignModal():void {
    this.openSign.emit();
  }
}
