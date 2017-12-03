import { Component } from '@angular/core'
import { EventsService } from '../../services/events.service'
import { Events } from '../../../viewModels/Event'

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'events.component.html'
})

export class EventsComponent {
    public events: Events[]

    constructor(private eventsService: EventsService) {
        this.eventsService.getAllEvents()
            .subscribe(events => {
                this.events = events
            })
    }
}