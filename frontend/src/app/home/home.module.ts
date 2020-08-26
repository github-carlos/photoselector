import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CardComponent } from './card/card.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumListComponent } from './album-list/album-list.component';

import { SharedModule } from '../shared/shared.module';
// PrimgeNG modules
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    AddAlbumComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CalendarModule,
    FileUploadModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  entryComponents: [ProgressBarComponent]

})
export class HomeModule { }
