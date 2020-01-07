import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() tickEvent = new EventEmitter<number>();
  counter = 1;
  timer;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.timer = setInterval(() => {
      this.tickEvent.emit(this.counter);
      console.log('Event emmited with counter = ' + this.counter);
      this.counter++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.timer);
    console.log('Game stopped!');
  }

}
