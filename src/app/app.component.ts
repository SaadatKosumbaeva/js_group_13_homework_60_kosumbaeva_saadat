import { Component, OnInit } from '@angular/core';
import { RouletteService } from './shared/roulette.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbers: number[] = [];
  balance = 100;
  bet = 1;
  colorBet = 'red';
  color = '';
  startDisabled = false;
  gameOver = false;

  constructor(private rouletteService: RouletteService) {}

  ngOnInit() {
    this.rouletteService.newNumber.subscribe((number: number) => {
      this.numbers.push(number);
    })
    this.rouletteService.newColor.subscribe((color: string) => {
      this.color = color;
      this.getBalance();
    })
  }

  onStart() {
    this.rouletteService.start();
  }

  onStop() {
    this.rouletteService.stop();
  }

  onReset() {
    this.numbers = [];
    this.balance = 100;
    this.bet = 1;
    this.colorBet = 'red';
    this.gameOver = false;
    this.startDisabled = false;
  }

  getBalance() {
    if (this.color === this.colorBet && this.color !== 'zero') {
      this.balance += this.bet;
    } else if (this.color === this.colorBet && this.color === 'zero') {
      this.balance += this.bet * 35;
    } else if (this.color !== this.colorBet) {
      this.balance -= this.bet;
    }

    if (this.balance <= 0) {
      this.onStop();
      this.startDisabled = true;
      this.gameOver = true;
    }
  }
}
