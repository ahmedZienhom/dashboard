import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AythLayoutComponent } from './auth-layout.component';

describe('AythLayoutComponent', () => {
  let component: AythLayoutComponent;
  let fixture: ComponentFixture<AythLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AythLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AythLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
