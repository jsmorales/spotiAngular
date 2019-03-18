import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-render-cards',
  templateUrl: './render-cards.component.html',
  styleUrls: ['./render-cards.component.css']
})
export class RenderCardsComponent implements OnInit {
  @Input() items: string;
  @Input() endPointLocalName: string;
  @Input() imageNameProperty: string;
  constructor() { }

  ngOnInit() {
  }

}
