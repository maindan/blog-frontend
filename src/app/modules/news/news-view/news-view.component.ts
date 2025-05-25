import { Component, inject } from '@angular/core';
import { MobileService } from '../../../shared/services/mobile.service';
import { PostListComponent } from "../post-list/post-list.component";
import { IPost } from '../../../shared/interfaces/post';
import { PostService } from '../../../shared/services/post.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-news-view',
  imports: [PostListComponent],
  templateUrl: './news-view.component.html',
  styleUrl: './news-view.component.scss'
})
export class NewsViewComponent {
  public isMobile: boolean = false;
  public posts: IPost[] = [];

  private mobileService: MobileService = inject(MobileService);
  private postService: PostService = inject(PostService);
  private sharedService: SharedService = inject(SharedService);

  constructor() {
    this.mobileService.isMobileView.subscribe({
      next: (value: boolean) => {
        this.isMobile = value;
      }
    })
    this.getAllPosts();
  }

  private getAllPosts(): void {
    this.sharedService.loadingPresent();
    this.postService.getAllPosts()
      .subscribe({
        next: (value: IPost[]) => {
          this.posts = value;
        },
        error: (err) => {
          console.log(err);
          this.sharedService.loadingDimiss();
        },
        complete: () => {
          this.sharedService.loadingDimiss()
        },
      })
  }
}
