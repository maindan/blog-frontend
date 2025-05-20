import { Component, input, InputSignal } from '@angular/core';
import { IPost } from '../../../shared/interfaces/post';
import { TagComponent } from "../../../shared/components/tag/tag.component";

@Component({
  selector: 'app-post-card',
  imports: [TagComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  public post: InputSignal<IPost> = input.required<IPost>();
}
