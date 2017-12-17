import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctComponent } from './proudct.component';

describe('ProudctComponent', () => {
  let component: ProudctComponent;
  let fixture: ComponentFixture<ProudctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProudctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
