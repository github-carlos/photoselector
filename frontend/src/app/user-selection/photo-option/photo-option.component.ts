import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-option',
  templateUrl: './photo-option.component.html',
  styleUrls: ['./photo-option.component.css']
})
export class PhotoOptionComponent implements OnInit {

  @Input() imageURL: string;
  showModal = false;
  selected = false;
  showCommentBox = false;

  @Output() liked = new EventEmitter<boolean>();
  @Output() commented = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    console.log('imageUrl', this.imageURL)
  }

  emitComment(data) {
    this.showCommentBox = false;
    this.commented.emit(data);
  }

  emitLike() {
    this.selected = !this.selected;
    this.liked.emit(this.selected);
  }
}
