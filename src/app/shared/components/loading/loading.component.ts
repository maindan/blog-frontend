import { Component, inject } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  public loading: boolean = false;
  private sharedService: SharedService = inject(SharedService);

  constructor() {
    this.sharedService.LoadingStatus.subscribe({
      next: (value: boolean) => {
        this.loading = value;
        alert(this.loading)
      }
    })
  }
}
