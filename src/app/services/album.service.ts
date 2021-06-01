import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../models/Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private httpClient:HttpClient) { }
  getAlbums():Observable<Album[]>{
    return this.httpClient.get<Album[]>(this.url)
  }

  getSingleAlbum(id:number):Observable<Album> {
    return this.httpClient.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
}
