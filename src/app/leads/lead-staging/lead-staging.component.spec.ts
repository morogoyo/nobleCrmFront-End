import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadStagingComponent } from './lead-staging.component';

describe('LeadStagingComponent', () => {
  let component: LeadStagingComponent;
  let fixture: ComponentFixture<LeadStagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadStagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadStagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
