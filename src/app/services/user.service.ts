import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';
import { USERS } from '../mock/mock-users';

@Injectable()
export class UserService {
    getUsers(): Observable<User[]> {
      return Observable.of(USERS).map(res => res);
    }
}
