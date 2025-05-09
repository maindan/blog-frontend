import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../security/user.service';
import { IUser } from '../../../shared/interfaces/security/user';
import { AuthService, USER_ID } from '../../security/auth.service';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  imports: [
    Menu,
    Button,
    Avatar,
    CommonModule
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent implements OnInit {
  private userService: UserService = inject(UserService);
  private authService: AuthService = inject(AuthService);

  public userData: IUser | null = null;
  public userIcon:string = '';
  public isAuth: boolean = false;

  items: MenuItem[] | undefined;

  constructor() {

    this.userService.getUserData.subscribe({
      next: (value: IUser | null) => {
        if (value) {
          this.isAuth = true;
          this.userData = value;
          this.userIcon = value.username.split('')[0].toLocaleUpperCase()
        }
      },
    });

    if(!this.userData) {
      this.authService.setUser(parseInt(localStorage.getItem(USER_ID)!))
    }
  }

  public logout(): void {
    this.isAuth = false;
    this.authService.logout();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Export',
            icon: 'pi pi-upload',
          },
        ],
      },
    ];
  }
}
