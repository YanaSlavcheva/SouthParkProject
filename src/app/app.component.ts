import { Component } from '@angular/core'
import { EventsService } from './services/events.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers: [ EventsService ]
})

export class AppComponent  { }
