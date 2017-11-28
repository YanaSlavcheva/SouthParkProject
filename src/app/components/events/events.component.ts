import { Component } from '@angular/core'
import { EventsService } from '../../services/events.service'

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'events.component.html'
})

export class EventsComponent {
    constructor(private eventsService: EventsService){
        this.eventsService.getAllEvents()
            .subscribe(events => {
                console.log(events)
            })
    }
}