import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  private idArtist: string;
  private artist: any;
  private loading = true;

  constructor(private activatedRoute: ActivatedRoute, private spotiService: SpotifyService) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.idArtist = params.idArtist;
    });
  }

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    this.spotiService.getArtist(this.idArtist).subscribe(data => {
      console.log(data);
      this.artist = data;
      this.loading = false;
    });
  }
}
