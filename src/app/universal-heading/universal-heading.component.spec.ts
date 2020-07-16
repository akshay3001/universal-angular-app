import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalHeadingComponent } from './universal-heading.component';

describe('UniversalHeadingComponent', () => {
  let component: UniversalHeadingComponent;
  let fixture: ComponentFixture<UniversalHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
