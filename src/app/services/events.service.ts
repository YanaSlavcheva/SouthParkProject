import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class EventsService {
    constructor(private http: Http) {
        console.log('Events Service initialized...')
    }

    getAllEvents(){
        return this.http.get('http://localhost:1339/api/events')
            .map(res => res.json())
    }
}