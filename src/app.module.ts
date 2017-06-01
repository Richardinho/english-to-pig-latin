import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//  application
import { AppComponent } from './app.component';
import { HistoryComponent } from './history.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HistoryComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
