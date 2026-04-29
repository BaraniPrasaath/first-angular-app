import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-undo-component',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './undo-component.html',
  styleUrl: './undo-component.css',
})
export class UndoComponent implements OnInit, OnDestroy {
  showDiv = true;
  showButton = false;

  timerId: any = null;
  intervalId: any = null;

  timer = signal(10);
  count = 0;

  ngOnInit(): void {
    console.log('Component Mounter two');
    this.startTimer();
  }

  startTimer() {
    this.clearTimer();

    this.timerId = setTimeout(() => {
      this.showDiv = false;
      this.showButton = true;
    }, 11000);
    this.intervalId = setInterval(() => {
      this.timer.update((t) => t - 1);
    }, 1000);
  }

  undo() {
    this.count += 1;
    this.showDiv = true;
    this.showButton = false;
    this.timer.set(10);
    this.startTimer();
  }

  clearTimer() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    console.log('Component Un-Mounter two');
    this.clearTimer();
  }
}
