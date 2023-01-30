import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTituloComponent } from './r-titulo.component';

describe('RTituloComponent', () => {
  let component: RTituloComponent;
  let fixture: ComponentFixture<RTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTituloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
