import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { RouletteService } from '../shared/roulette.service';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @Input() set appColor(number: string) {
    this.number = parseInt(number);
  }

  number = 0;

  constructor(private rouletteService: RouletteService, private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.addClass(this.el.nativeElement, this.rouletteService.getColor(this.number));
  }
}
