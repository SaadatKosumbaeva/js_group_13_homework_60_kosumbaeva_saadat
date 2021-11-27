import { Component, OnInit } from '@angular/core';
import { RouletteService } from './shared/roulette.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbers: number[] = [];

  constructor(private rouletteService: RouletteService) {}

  ngOnInit() {
    this.rouletteService.newNumber.subscribe((number: number) => {
      this.numbers.push(number);
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
  }


}
