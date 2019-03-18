import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  private idPlaylist: string;
  private loading = true;
  public playlist: any;
  public tracks = [];
  constructor(private activatedRoute: ActivatedRoute, private spotiService: SpotifyService) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.idPlaylist = params.idPlaylist;
    });

    this.getPlaylist();
  }

  ngOnInit() {
  }

  getPlaylist() {
    this.spotiService.getPlaylist(localStorage.getItem('tokenSpoty'), this.idPlaylist).subscribe(data => {
      console.log(data);
      this.playlist = data;
      this.tracks = this.playlist.tracks.items;
      this.loading = false;

      console.log(this.tracks);
    });
  }

}
