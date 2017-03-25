import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { SearchComponent } from './components/search/search.component';

import { SpotifyService } from './services/spotify.service';
import { UserService } from './services/user.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    SearchComponent
  ],
  providers: [
    SpotifyService,
    UserService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
