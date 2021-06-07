import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url='https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient:HttpClient) {
  }

  getPosts():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url);
  }
}
