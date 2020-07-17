import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-universal-heading',
  templateUrl: './universal-heading.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UniversalHeadingComponent implements OnInit {
  @Input() headingType: string;

  constructor() { }

  ngOnInit() {
  }

}
