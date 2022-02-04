import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeadsComponent } from './update-leads.component';

describe('UpdateLeadsComponent', () => {
  let component: UpdateLeadsComponent;
  let fixture: ComponentFixture<UpdateLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
