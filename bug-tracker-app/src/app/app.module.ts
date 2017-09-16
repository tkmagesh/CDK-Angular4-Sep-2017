import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/bugStats/bugStats.component';
import { BugEditComponent } from './bugTracker/bugEdit/bugEdit.component';

import { ClosedCountPipe } from './pipes/closedCount.pipe';

import { BugOperationsService } from './services/BugOperations.service';
import { BugStorageService } from './services/BugStorage.service';
import { BugServerService } from './services/BugServer.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
