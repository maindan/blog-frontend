import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  get LoadingStatus(): BehaviorSubject<boolean> {
    return this._loading;
  }

  public loadingPresent(): void {
    this._loading.next(true);
  }

  public loadingDimiss(): void {
    this._loading.next(false);
  }
}
