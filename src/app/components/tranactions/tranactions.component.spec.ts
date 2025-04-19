import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranactionsComponent } from './tranactions.component';

describe('TranactionsComponent', () => {
  let component: TranactionsComponent;
  let fixture: ComponentFixture<TranactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
