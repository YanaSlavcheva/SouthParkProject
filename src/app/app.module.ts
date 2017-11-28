import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component'
import { EventsComponent } from './components/events/events.component'
import { UsersComponent } from './components/users/users.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, EventsComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
