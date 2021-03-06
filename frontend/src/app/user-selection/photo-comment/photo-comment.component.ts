import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-photo-comment',
  templateUrl: './photo-comment.component.html',
  styleUrls: ['./photo-comment.component.css']
})
export class PhotoCommentComponent implements OnInit {


  @Output() closeCommentBox = new EventEmitter();
  @Output() data = new EventEmitter();
  @Input() comment: string;
  constructor() { }

  ngOnInit(): void {
  }

  notifyData() {
    this.data.emit(this.comment);
  }

  closeComment() {
    this.closeCommentBox.emit();
  }
}
