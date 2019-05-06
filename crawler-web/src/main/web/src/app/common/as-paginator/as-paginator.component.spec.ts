import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPaginatorComponent } from './as-paginator.component';

describe('AsPaginatorComponent', () => {
  let component: AsPaginatorComponent;
  let fixture: ComponentFixture<AsPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
