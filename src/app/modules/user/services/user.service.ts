import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private userService: HttpClient) {
  }
  getUsers():Observable<User[]>{
    return this.userService.get<User[]>(this.url)
  }
}
