import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


// routing
import { UserSelectionRoutingModule } from './user-selection.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UserSelectionRoutingModule
  ]
})
export class UserSelectionModule { }
