import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsslsetComponent } from './asslset.component';

describe('AsslsetComponent', () => {
  let component: AsslsetComponent;
  let fixture: ComponentFixture<AsslsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsslsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsslsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
