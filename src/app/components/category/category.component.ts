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
    this.spotiService.getCategory(localStorage.getItem('tokenSpoty'), this.idCategory).subscribe(data => {
      console.log(data);
      const dataRes: any = data;
      this.playlists = dataRes.playlists.items;
      this.loading = false;
    });
  }

}
