import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private apiService: ApiService) {
    }

    getUser(id: string) {
        //return user from api
        return this.apiService.get('/user/' + id);
    }

    updateUser(name: string, avatar: string) {
        //return user from api
        return this.apiService.post('/user/', {
            name,
            avatar
        });
    }
}
