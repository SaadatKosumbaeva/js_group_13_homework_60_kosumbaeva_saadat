import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouletteService } from './shared/roulette.service';
import { ColorDirective } from './directives/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [RouletteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
