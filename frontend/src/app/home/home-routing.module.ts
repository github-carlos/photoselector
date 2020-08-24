import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AddAlbumComponent } from './add-album/add-album.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', component: AlbumListComponent},
    {path: 'new', component: AddAlbumComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
