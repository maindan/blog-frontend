import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from 'primeng/button'
import { HomeComponent } from "./core/home/home.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog';
}
