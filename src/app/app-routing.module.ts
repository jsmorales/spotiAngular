import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';
import {PlaylistComponent} from './components/playlist/playlist.component';
import {ArtistComponent} from './components/artist/artist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'category/:idCategory', component: CategoryComponent},
  { path: 'playlist/:idPlaylist', component: PlaylistComponent},
  { path: 'artist/:idArtist', component: ArtistComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
