import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BistsCardComponent } from './bists-card.component';

describe('BistsCardComponent', () => {
  let component: BistsCardComponent;
  let fixture: ComponentFixture<BistsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BistsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BistsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
