// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-note-maker',
//   templateUrl: './notes.component.html',
//   styleUrls: ['./notes.component.scss']
// })
// export class NotesComponent {
//   notes: any[] = [];

//   addNote() {
//     this.notes.push({
//       content: '',
//       color: '#ffcc00' 
//     });
//   }

//   deleteNote(index: number) {
//     this.notes.splice(index, 1);
//   }
// }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-note-maker',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];
  drawingData: string = '';
  isDrawing: boolean = false;
  penColor: string = '#000000';
  backgroundColor: string = '#ffffff';
  penWidth: number = 2;
  isEraser: boolean = false;
  eraserSize: number = 10;

  @ViewChild('drawingCanvas', { static: true }) drawingCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.loadNotesFromCookies();
    this.loadDrawingFromCookies();
  }

  addNote() {
    this.notes.push({ content: '', color: '#ffcc00' });
    this.saveNotesToCookies();
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.saveNotesToCookies();
  }

  saveNotesToCookies() {
    this.cookieService.set('notes', JSON.stringify(this.notes));
  }

  loadNotesFromCookies() {
    const notes = this.cookieService.get('notes');
    if (notes) {
      this.notes = JSON.parse(notes);
    }
  }

  startDrawing(event: MouseEvent) {
    this.isDrawing = true;
    this.draw(event);
  }

  draw(event: MouseEvent) {
    if (!this.isDrawing) return;

    const canvas = this.drawingCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineWidth = this.isEraser ? this.eraserSize : this.penWidth;
      ctx.lineCap = 'round';
      ctx.strokeStyle = this.isEraser ? this.backgroundColor : this.penColor;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);

      this.saveDrawingToCookies();
    }
  }

  stopDrawing() {
    this.isDrawing = false;
    const canvas = this.drawingCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
    }
  }

  clearDrawing() {
    const canvas = this.drawingCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.saveDrawingToCookies();
    }
  }

  changeBackgroundColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.backgroundColor = input.value;
    const canvas = this.drawingCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.saveDrawingToCookies();
    }
  }

  changePenColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.penColor = input.value;
    this.isEraser = false;
  }

  enableEraser() {
    this.isEraser = true;
  }

  saveDrawingToCookies() {
    const canvas = this.drawingCanvas.nativeElement;
    this.drawingData = canvas.toDataURL();
    this.cookieService.set('drawing', this.drawingData);
  }

  loadDrawingFromCookies() {
    const drawingData = this.cookieService.get('drawing');
    if (drawingData) {
      const canvas = this.drawingCanvas.nativeElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const img = new Image();
        img.src = drawingData;
        img.onload = () => ctx.drawImage(img, 0, 0);
      }
    }
  }

  // drawRectangle() {
  //   const canvas = this.drawingCanvas.nativeElement;
  //   const ctx = canvas.getContext('2d');
  //   if (ctx) {
  //     ctx.beginPath();
  //     ctx.rect(20, 20, 150, 100);
  //     ctx.stroke();
  //   }
  // }
  
  // drawCircle() {
  //   const canvas = this.drawingCanvas.nativeElement;
  //   const ctx = canvas.getContext('2d');
  //   if (ctx) {
  //     ctx.beginPath();
  //     ctx.arc(100, 100, 50, 0, 2 * Math.PI);
  //     ctx.stroke();
  //   }
  // }
  
  insertImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const canvas = this.drawingCanvas.nativeElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
        };
        img.src = URL.createObjectURL(input.files[0]);
      }
    }
  }
  
}
