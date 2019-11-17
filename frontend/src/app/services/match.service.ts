import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private apiService: ApiService) {}

  matchUser (id1: string , id2: string ) {
    return this.apiService.get('/match/' + id1 + '/' + id2);
}
matchUserWithJob (companyId: string, candidateId: string) {
    return this.apiService.get( '/matchJobs/' + companyId + '/' + candidateId);
}
}
