import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBuscadorComponent } from './b-buscador.component';

describe('BBuscadorComponent', () => {
  let component: BBuscadorComponent;
  let fixture: ComponentFixture<BBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BBuscadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
