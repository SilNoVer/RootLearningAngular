import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBotonesRRSSComponent } from './r-botones-rrss.component';

describe('RBotonesRRSSComponent', () => {
  let component: RBotonesRRSSComponent;
  let fixture: ComponentFixture<RBotonesRRSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RBotonesRRSSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RBotonesRRSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
