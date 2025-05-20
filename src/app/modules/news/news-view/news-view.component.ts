import { Component, inject } from '@angular/core';
import { MobileService } from '../../../shared/services/mobile-service';
import { PostListComponent } from "../post-list/post-list.component";

@Component({
  selector: 'app-news-view',
  imports: [PostListComponent],
  templateUrl: './news-view.component.html',
  styleUrl: './news-view.component.scss'
})
export class NewsViewComponent {
  private mobileService: MobileService = inject(MobileService);
  public isMobile: boolean = false;

  constructor() {
    this.mobileService.isMobileView.subscribe({
      next: (value: boolean) => {
        this.isMobile = value;
      }
    })
  }
}
