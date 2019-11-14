import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagointerComponent } from './pagointer.component';

describe('PagointerComponent', () => {
  let component: PagointerComponent;
  let fixture: ComponentFixture<PagointerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagointerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
