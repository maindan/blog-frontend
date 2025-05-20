import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tag',
  imports: [RouterLink],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  public tag: InputSignal<string> = input<string>('');
}
