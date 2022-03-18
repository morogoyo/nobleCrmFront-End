import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteLeadsComponent } from './delete-leads.component';

describe('DeleteLeadsComponent', () => {
  let component: DeleteLeadsComponent;
  let fixture: ComponentFixture<DeleteLeadsComponent>;

  beforeEach(waitForAsync(() => {
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
