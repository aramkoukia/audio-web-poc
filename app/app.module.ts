import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BashComponent } from './components/bash.component';
import { OscComponent } from './components/osc.component';
import { MultiChannelComponent } from './components/multichannel.component';
import { SampleRatesComponent } from './components/samplerates.component';
import { PlaybackPrecisionComponent } from './components/playbackprecision.component';
import { SyncPrecisionComponent } from './components/syncprecision.component';
import { MediaErrorCheckingComponent } from './components/mediaerrorchecking.component';


//import { PageNotFoundComponent } from './components/notfound.component';

const appRoutes: Routes = [
    { path: 'bash', component: BashComponent },
    { path: 'osc', component: OscComponent },
    { path: 'multichannel', component: MultiChannelComponent },
    { path: 'samplerates', component: SampleRatesComponent },
    { path: 'playbackprecision', component: PlaybackPrecisionComponent },
    { path: 'syncprecision', component: SyncPrecisionComponent },
    { path: 'mediaerrorchecking', component: MediaErrorCheckingComponent },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, BashComponent, OscComponent, MultiChannelComponent, SampleRatesComponent, PlaybackPrecisionComponent, SyncPrecisionComponent, MediaErrorCheckingComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }