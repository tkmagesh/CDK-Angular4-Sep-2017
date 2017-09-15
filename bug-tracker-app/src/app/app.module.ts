import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ClosedCountPipe } from './pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe,
    SortPipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
