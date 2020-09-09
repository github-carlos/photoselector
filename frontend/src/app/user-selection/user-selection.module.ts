import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


// routing
import { UserSelectionRoutingModule } from './user-selection.routing';
import { PhotoOptionComponent } from './photo-option/photo-option.component';

// primegn
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [HomeComponent, PhotoOptionComponent],
  imports: [
    CommonModule,
    UserSelectionRoutingModule,
    ButtonModule
  ]
})
export class UserSelectionModule { }
