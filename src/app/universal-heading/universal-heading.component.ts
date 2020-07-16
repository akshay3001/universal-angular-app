import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-universal-heading',
  templateUrl: './universal-heading.component.html',
  styleUrls: []
})
export class UniversalHeadingComponent implements OnInit {
  @Input() headingType: string;

  constructor() { }

  ngOnInit() {
  }

}
