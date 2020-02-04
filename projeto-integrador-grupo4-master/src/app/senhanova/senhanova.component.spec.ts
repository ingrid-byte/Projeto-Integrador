import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhanovaComponent } from './senhanova.component';

describe('SenhanovaComponent', () => {
  let component: SenhanovaComponent;
  let fixture: ComponentFixture<SenhanovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhanovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhanovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
