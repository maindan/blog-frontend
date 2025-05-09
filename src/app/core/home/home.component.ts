import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SigninComponent } from "../signin/signin.component";

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SigninComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public signInModal:boolean = false;

  handleSignInModal(value:boolean):void {
    this.signInModal = value
  }
}
