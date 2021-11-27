import { EventEmitter } from '@angular/core';

export class RouletteService {
  newNumber = new EventEmitter<number>();

  interval!: number;

  generateNumber() {
    return Math.floor(Math.random() * 37);
  }

  start() {
    this.interval = setInterval(() => {
      const number = this.generateNumber();
      this.newNumber.emit(number);
    }, 1000)
  }

  stop() {
    clearInterval(this.interval);
  }

  getColor(number: number) {
    if (number > 0 && number <= 10 && number % 2 === 1 ||
      number >= 19 && number <= 28 && number % 2 === 1 ||
      number >= 11 && number <= 18 && number % 2 === 0 ||
      number >= 29 && number <= 36 && number % 2 === 0) {
      return 'red';
    } else if (number > 0 && number <= 10 && number % 2 === 0 ||
      number >= 19 && number <= 28 && number % 2 === 0 ||
      number >= 11 && number <= 18 && number % 2 === 1 ||
      number >= 29 && number <= 36 && number % 2 === 1) {
      return 'black';
    } else if (number === 0) {
      return 'zero';
    } else {
      return 'unknown';
    }
  }
}
