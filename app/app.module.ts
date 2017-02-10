import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BashComponent } from './components/bash.component';
import { OscComponent } from './components/osc.component';
//import { PageNotFoundComponent } from './components/notfound.component';

const appRoutes: Routes = [
    { path: 'bash', component: BashComponent },
    { path: 'osc', component: OscComponent },
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, BashComponent, OscComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }