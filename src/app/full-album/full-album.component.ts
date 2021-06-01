import {Component, OnInit} from '@angular/core';
import {Album} from "../models/Album";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../services/album.service";

@Component({
  selector: 'app-full-album',
  templateUrl: './full-album.component.html',
  styleUrls: ['./full-album.component.css']
})
export class FullAlbumComponent implements OnInit {

  singleAlbum: Album;

  constructor(private activatedRoute: ActivatedRoute, private albumService:AlbumService) {

    this.activatedRoute.params.subscribe(value => {
      this.albumService.getSingleAlbum(value.id).subscribe(data=>{
        this.singleAlbum=data;
      });
    })
  }

  ngOnInit(): void {
  }

}
