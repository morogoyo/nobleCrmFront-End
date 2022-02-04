import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadLeadsComponent } from './read-leads.component';

describe('ReadLeadsComponent', () => {
  let component: ReadLeadsComponent;
  let fixture: ComponentFixture<ReadLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
