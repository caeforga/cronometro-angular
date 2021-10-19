import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css'],
})
export class CronometroComponent implements OnInit {
  /* playpause: string = 'paused';
  isPaused: boolean = true;
  secsphere: string = 'seconds-sphere';*/
  segundo: number = 0;
  @Input() inicio;
  @Output() multiplo10 = new EventEmitter();

  constructor() {}

  /*playPause() {
    /* const isPaused = !playPauseButton.classList.contains('running'); 
    if (this.isPaused) {
      this.playpause = 'paused running';
      this.start();
    } else {
      this.playpause = 'paused';
      this.pause();
    }
  }

  start() {
    this.secsphere = 'seconds-sphere-run';
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0) {
        this.multiplo10.emit(this.segundo);
      }
    }, 1000);
  }

  pause() {
    this.secsphere = 'seconds-sphere';
  }*/

  ngOnInit(): void {
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0) {
        this.multiplo10.emit(this.segundo);
      }
    }, 1000);
  }
}
