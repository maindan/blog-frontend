import { Component, inject, input, InputSignal } from '@angular/core';
import { PostCardComponent } from "../post-card/post-card.component";
import { IPost } from '../../../shared/interfaces/post';

@Component({
  selector: 'app-post-list',
  imports: [PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  public posts: InputSignal<IPost[]> = input<IPost[]>([]);

}
