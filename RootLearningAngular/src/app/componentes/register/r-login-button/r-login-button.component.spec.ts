import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RLoginButtonComponent } from './r-login-button.component';

describe('RLoginButtonComponent', () => {
  let component: RLoginButtonComponent;
  let fixture: ComponentFixture<RLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RLoginButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
