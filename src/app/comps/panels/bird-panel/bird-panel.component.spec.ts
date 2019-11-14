import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdPanelComponent } from './bird-panel.component';

describe('BirdPanelComponent', () => {
  let component: BirdPanelComponent;
  let fixture: ComponentFixture<BirdPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
