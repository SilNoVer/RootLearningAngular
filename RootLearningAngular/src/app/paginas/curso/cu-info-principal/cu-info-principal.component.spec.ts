import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuInfoPrincipalComponent } from './cu-info-principal.component';

describe('CuInfoPrincipalComponent', () => {
  let component: CuInfoPrincipalComponent;
  let fixture: ComponentFixture<CuInfoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuInfoPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuInfoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
