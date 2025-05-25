import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SigninComponent } from "../signin/signin.component";
import { MobileService } from '../../shared/services/mobile.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    LoadingComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public signInModal:boolean = false;
  public isMobile: boolean = false;

  private mobileService: MobileService = inject(MobileService);
  private sharedService: SharedService = inject(SharedService);

  handleSignInModal(value:boolean):void {
    this.signInModal = value
  }

  constructor() {
    this.mobileService.isMobileView.subscribe({
      next: (value:boolean) => {
        this.isMobile = value;
      }
    })

    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event?:Event) {
    event?.preventDefault();
    event?.stopPropagation();

    this.mobileService.setIsMobileView(this.mobileService.verifyIsMobile())
  }
}
