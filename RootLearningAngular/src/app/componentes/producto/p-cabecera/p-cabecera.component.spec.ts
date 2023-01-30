import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCabeceraComponent } from './p-cabecera.component';

describe('PCabeceraComponent', () => {
  let component: PCabeceraComponent;
  let fixture: ComponentFixture<PCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
