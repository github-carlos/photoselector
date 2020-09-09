import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


// routing
import { UserSelectionRoutingModule } from './user-selection.routing';
import { PhotoOptionComponent } from './photo-option/photo-option.component';

// primegn
import {ButtonModule} from 'primeng/button';
import { PhotoCommentComponent } from './photo-comment/photo-comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, PhotoOptionComponent, PhotoCommentComponent],
  imports: [
    CommonModule,
    UserSelectionRoutingModule,
    ButtonModule,
    FormsModule
  ]
})
export class UserSelectionModule { }
