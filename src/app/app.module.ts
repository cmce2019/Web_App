import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PagerrorComponent } from './pagerror/pagerror.component';
import {DataService} from './data.service';

const routes: Routes = [
  { path: 'firstcomp', component: FirstComponentComponent },
  { path: 'PagerrorComponent', component: PagerrorComponent },
  { path: '', component: FirstComponentComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/PagerrorComponent', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PagerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSPZc4rUlbyfLM4SLHe2c0iu8e-2TGGFA'
    }),
    RouterModule.forRoot(routes) 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
