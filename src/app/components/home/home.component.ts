import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public token: string;
  public categories: any;
  public loading = true;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.spotifyService.getCategories(this.getItem()).subscribe((data: any) => {
      console.log(data);
      this.categories = data;
      this.loading = false;
    });
  }

  init() {
    this.getCategories();
    this.saveTokenLocal();
  }

  saveTokenLocal() {
    localStorage.setItem('tokenSpoty', this.token);
  }

  getItem() {
    return localStorage.getItem('tokenSpoty');
  }
}
