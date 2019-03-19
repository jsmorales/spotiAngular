import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public idCategory: string;
  public playlists = [];
  loading = true;
  public errorUi = false;
  public errorMessage = '';
  constructor(private activatedRoute: ActivatedRoute, private spotiService: SpotifyService) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.idCategory = params.idCategory;
    });
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.spotiService.getCategory(this.idCategory).subscribe(data => {
      console.log(data);
      this.playlists = data;
      this.errorUi = false;
      this.loading = false;
      this.errorMessage = '';
    }, (error) => {
      console.log(error);
      this.errorUi = true;
      this.loading = false;
      this.errorMessage = error.error.error.message;
    });
  }

}
