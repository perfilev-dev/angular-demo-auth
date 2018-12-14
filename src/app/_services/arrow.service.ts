import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArrowService {
  private upO = new Subject<boolean>();
  private upS = false;

  constructor() {}

  flip() {
    this.upS = !this.upS;
    this.upO.next(this.upS);
  }

  getState(): Observable<boolean> {
    return this.upO.asObservable();
  }
}
