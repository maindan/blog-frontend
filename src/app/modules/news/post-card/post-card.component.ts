import { Component, input, InputSignal } from '@angular/core';
import { IPost } from '../../../shared/interfaces/post';
import { TagComponent } from "../../../shared/components/tag/tag.component";
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [
    TagComponent,
    RouterLink,
    DatePipe
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  public post: InputSignal<IPost> = input.required<IPost>();
}
