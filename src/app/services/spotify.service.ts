import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  URL_BASE = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {
  }

  getObservableQuery(query: string) {
    const body: any = {
      grant_type: 'client_credentials',
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('tokenSpoty')
    });

    return this.http.get(this.URL_BASE + query, {headers});
  }

  getCategories() {
    return this.getObservableQuery('/browse/categories')
      .pipe( map( (data: any) =>  data.categories.items ) );
      // this pipe method helps format the result on this case through the map method.
  }

  getCategory(idCategory: string) {
    return this.getObservableQuery('/browse/categories/' + idCategory + '/playlists')
      .pipe( map( (data: any) =>  data.playlists.items ) );
  }

  getPlaylist(idPlaylist: string) {
    return this.getObservableQuery('/playlists/' + idPlaylist);
  }

  searchArtist(term: string) {
    return this.getObservableQuery('/search?q=' + term + '&type=artist')
      .pipe( map( (data: any) => data.artists.items ) );
  }

  getArtist(idArtist: string) {
    return this.getObservableQuery('/artists/' + idArtist)
      .pipe( map( (data: any) => data ) );
  }
}
