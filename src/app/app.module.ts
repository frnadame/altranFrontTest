import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BrastlewarkComponent } from './brastlewark/brastlewark.component';

@NgModule({
  declarations: [
    AppComponent,
    BrastlewarkComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
