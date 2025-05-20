import { Component, inject } from '@angular/core';
import { PostCardComponent } from "../post-card/post-card.component";
import { IPost } from '../../../shared/interfaces/post';
import { PostService } from '../../../shared/services/post-service';

@Component({
  selector: 'app-post-list',
  imports: [PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  public posts: IPost[] = [];

  private postService: PostService = inject(PostService);

  constructor() {
    this.getAllPosts();
  }

  private getAllPosts(): void {
    this.postService.getAllPosts()
      .subscribe({
        next: (value: IPost[]) => {
          this.posts = value;
        }
      })
  }
}
