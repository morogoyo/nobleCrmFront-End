import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLeadsComponent } from './delete-leads.component';

describe('DeleteLeadsComponent', () => {
  let component: DeleteLeadsComponent;
  let fixture: ComponentFixture<DeleteLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
