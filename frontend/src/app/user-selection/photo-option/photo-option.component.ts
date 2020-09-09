import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-option',
  templateUrl: './photo-option.component.html',
  styleUrls: ['./photo-option.component.css']
})
export class PhotoOptionComponent implements OnInit {

  @Input() imageURL: string;
  showModal = false;
  constructor() {
  }

  ngOnInit(): void {
    console.log('imageUrl', this.imageURL)
  }
}
