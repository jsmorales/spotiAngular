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
  public errorUi = false;
  public errorMessage = '';

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.spotifyService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data;
      this.loading = false;
      this.errorUi = false;
    }, (error) => {
      this.errorUi = true;
      this.loading = false;
      this.errorMessage = error.error.error.message;
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
