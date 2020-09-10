import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-option',
  templateUrl: './photo-option.component.html',
  styleUrls: ['./photo-option.component.css']
})
export class PhotoOptionComponent implements OnInit {

  @Input() imageURL: string;
  showModal = false;
  @Input() selected = false;
  showCommentBox = false;

  @Output() liked = new EventEmitter<boolean>();
  @Output() commented = new EventEmitter<string>();
  @Output() isShowingSomething = new EventEmitter<boolean>();

  @Input() comment: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  emitComment(data) {
    this.showCommentBox = false;
    this.commented.emit(data);
    this.emitShowSomething();
  }

  emitShowModal(value) {
    this.showModal = value;
    this.emitShowSomething();
  }

  emitShowCommentBox() {
    this.showCommentBox = !this.showCommentBox;
    this.emitShowSomething();
  }

  emitLike() {
    this.selected = !this.selected;
    this.liked.emit(this.selected);
  }

  emitShowSomething() {
    this.isShowingSomething.emit(this.showCommentBox || this.showModal);
  }
}
