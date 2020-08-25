import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { LoginGuard } from '../guards/login-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [LoginGuard], children: [
    {path: '', component: AlbumListComponent},
    {path: 'new', component: AddAlbumComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
