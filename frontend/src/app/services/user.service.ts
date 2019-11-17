import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {IUser} from "../interfaces/user";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getUserList(){
    return this.apiService.get('/user');
  }

  getUser(id: string) {
    //return user from api
    return this.apiService.get('/user/' + id);
  }

    getUserByName(name: string) {
    return this.apiService.get('/login/' + name);
  }

  getAvatarList() {
      return this.apiService.get('/getAvatar');
  }

  createUser(name: string, avatar: string, role: string) {
    //return user from api
    return this.apiService.post('/create', {
      name,
      avatar,
      role
    });
  }

  addContact(idContact: string, idUser: string) {
      return this.apiService.put('/user/add/' + idContact + '/asFirendTo/' + idUser, null)
  }

  addJob(id: string, req: string[], name: string) {
    return this.apiService.put('/addJob/' + id, {
      name,
      req
    });
  }

    transformUser(response: any): IUser {
        // @todo
        return null
    }
}
