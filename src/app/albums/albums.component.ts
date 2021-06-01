import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../services/album.service";
import {Album} from "../models/Album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(value => {
      this.albums = value;
    })
  }

}
