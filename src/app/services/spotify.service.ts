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

  getCategories(token: string) {
    const body: any = {
      grant_type: 'client_credentials',
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    return this.http.get(this.URL_BASE + '/browse/categories', {headers})
      .pipe( map( (data: any) =>  data.categories.items ) );
      // this pipe method helps format the result on this case through the map method.
  }

  getCategory(token: string, idCategory: string) {
    const body: any = {
      grant_type: 'client_credentials',
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    return this.http.get(this.URL_BASE + '/browse/categories/' + idCategory + '/playlists', {headers});
  }

  getPlaylist(token: string, idPlaylist: string) {
    const body: any = {
      grant_type: 'client_credentials',
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    return this.http.get(this.URL_BASE + '/playlists/' + idPlaylist, {headers});
  }

  searchArtist(token: string, term: string) {
    const body: any = {
      grant_type: 'client_credentials',
      q: term,
      type: 'artist'
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });
    return this.http.get(this.URL_BASE + '/search?q=' + term + '&type=artist', {headers})
      .pipe( map( (data: any) => data.artists.items ) );
  }
}
