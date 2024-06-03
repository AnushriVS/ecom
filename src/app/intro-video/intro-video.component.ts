import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-video',
  templateUrl: './intro-video.component.html',
  styleUrls: ['./intro-video.component.scss']
})
export class IntroVideoComponent implements AfterViewInit {
  @ViewChild('video') video!: ElementRef;
  showVideo: boolean = true;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // this.video.nativeElement.play();
  }

  onVideoEnded() {
    this.showVideo = false;
    this.router.navigate(['/home']); 
  }
}
