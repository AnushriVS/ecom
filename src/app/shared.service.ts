
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private grandTotalSource = new BehaviorSubject<number>(0);
  currentGrandTotal = this.grandTotalSource.asObservable();

  constructor() {}

  updateGrandTotal(total: number) {
    this.grandTotalSource.next(total);
  }
}
