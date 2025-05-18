import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../security/user.service';
import { IUser } from '../../../shared/interfaces/security/user';
import { AuthService, USER_ID } from '../../security/auth.service';
import { Menu } from 'primeng/menu';
import { Button } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  imports: [
    Menu,
    Avatar,
    CommonModule
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent implements OnInit {
  private userService: UserService = inject(UserService);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  public userData: IUser | null = null;
  public userIcon:string = '';
  public userId: number | null = null;
  public isAuth: boolean = false;

  items: MenuItem[] | undefined;

  constructor() {

    this.userService.getUserData.subscribe({
      next: (value: IUser | null) => {
        if (value) {
          this.isAuth = true;
          this.userData = value;
          this.userIcon = value.username.split('')[0].toLocaleUpperCase();
          this.setItemsMenu();
          this.setUserId();
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
    this.setItemsMenu()
  }

  private setUserId(): void {
    this.userId = this.authService.getUserId();
  }

  private setItemsMenu(): void {
    this.items = [
      {
        label: `@${this.userData?.username.toLocaleLowerCase() ?? ''}`,
        items: [
          {
            label: 'Novo post',
            icon: 'pi pi-plus',
            command: () => {
              this.router.navigate(['new_post'])
            },
          },
          {
            label: 'Meus posts',
            icon: 'pi pi-lightbulb',
            command: () => {
              this.router.navigate([this.userId, 'posts'])
            },
          },
          {
            label: 'Minha conta',
            icon: 'pi pi-user',
            command: () => {
              this.router.navigate(['account'])
            },
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
              this.authService.logout();
            },
          },
        ],
      },
    ];
  }
}
