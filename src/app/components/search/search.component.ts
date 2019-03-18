import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loading = false;
  artists = [];
  constructor(private servSpoty: SpotifyService) { }

  ngOnInit() {
  }

  searchTerm(term: string) {
    if ( term !== '') {
      this.loading = true;
      console.log('searching term ' + term);
      this.servSpoty.searchArtist(localStorage.getItem('tokenSpoty'), term).subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
        this.loading = false;
      });
    }
  }
}
