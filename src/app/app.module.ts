import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WildCardComponent } from './comps/cards/wild-card/wild-card.component';
import { BirdCardComponent } from './comps/cards/bird-card/bird-card.component';
import { BistsCardComponent } from './comps/cards/bists-card/bists-card.component';
import { BistPanelComponent } from './comps/panels/bist-panel/bist-panel.component';
import { BirdPanelComponent } from './comps/panels/bird-panel/bird-panel.component';
import { WildPanelComponent } from './comps/panels/wild-panel/wild-panel.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { HederComponent } from './comps/general/heder/heder.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { PagointerComponent } from './comps/general/pagointer/pagointer.component';

@NgModule({
  declarations: [
    AppComponent,
    WildCardComponent,
    BirdCardComponent,
    BistsCardComponent,
    BistPanelComponent,
    BirdPanelComponent,
    WildPanelComponent,
    FooterComponent,
    HederComponent,
    NavComponent,
    PagointerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
