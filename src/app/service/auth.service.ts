import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private hasWon = false;

  constructor() { }

  setWinStatus(status: boolean) {
    this.hasWon = status;
  }

  getWinStatus(): boolean {
    return this.hasWon;
  }
}
