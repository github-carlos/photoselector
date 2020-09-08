import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor() { }
  @Input() urlPhotoCapa: String;
  @Input() name: String = '';
  @Input() description: String;
  @Input() link: String;
  @Input() client_name: String;
  @Input() status: String;
  ngOnInit(): void {
  }

}
