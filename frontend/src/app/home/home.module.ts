import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CardComponent } from './card/card.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumListComponent } from './album-list/album-list.component';
// PrimgeNG modules
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    AddAlbumComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule,
    FileUploadModule,
    ButtonModule
  ],

})
export class HomeModule { }
