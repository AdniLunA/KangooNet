import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class ConferenceService {

    constructor(private apiService: ApiService) {
    }

    getConferenceList() {
        //return all
        return this.apiService.get('/conference');
    }

    getConference(id: string) {
        //return by id
        return this.apiService.get('/confrence'+id);
    }
}
