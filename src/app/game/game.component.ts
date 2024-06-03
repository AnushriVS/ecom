import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('winAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms', style({ opacity: 1, transform: 'scale(1.5)' })),
        animate('500ms', style({ transform: 'scale(1)' }))
      ])
    ]),
    trigger('loseAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class GameComponent implements OnInit, OnDestroy {
  dots = Array.from(Array(160).keys());
  colors = [
    'red',
    'green',
    'blue',
    'pink',
    'purple',
    'orange',
    'yellow',
    'cyan',
    'grey',
    'magenta',
  ];
  randomColorIndex = 0;
  counter = 50;
  myInterval: any;
  isGameStarted = false;
  isGameEnded = false;
  isWon = false;
  cleanCount = 0;
  dirtyCount = 0;

  @ViewChildren('dotRefs') dotRefs: QueryList<any> | undefined;

  constructor(private router: Router, private authService: AuthService) {}

  changeStyle(dot: any) {
    this.randomColorIndex = Math.floor(Math.random() * 10);
    if (!this.isGameEnded) {
      dot.classList.add(this.colors[this.randomColorIndex]);
      this.checkGameStatus();
    }
  }

  startTimer() {
    this.isGameStarted = true;
    this.myInterval = setInterval(() => {
      if (this.counter > 1) {
        this.counter--;
      } else {
        this.isGameEnded = true;
        this.endGame();
      }
    }, 1000);
  }

  checkGameStatus() {
    this.cleanCount = 0;
    this.dirtyCount = 0;
    this.dotRefs?.forEach((dot) => {
      if (dot.nativeElement.classList.length > 1) {
        this.dirtyCount++;
      } else {
        this.cleanCount++;
      }
    });
    if (!this.isGameStarted) {
      this.startTimer();
    }
    if (this.dirtyCount === 160) {
      this.isWon = true;
      this.isGameEnded = true;
      this.authService.setWinStatus(true);
      this.endGame();
    }
  }

  endGame() {
    setTimeout(() => {
      if (this.isWon) {
        this.router.navigate(['/coupon']);
      } else {
        this.router.navigate(['/best-sellers']);
      }
    }, 3000);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
  }
}
