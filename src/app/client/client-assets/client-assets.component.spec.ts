import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientAssetsComponent } from './client-assets.component';

describe('ClientAssetsComponent', () => {
  let component: ClientAssetsComponent;
  let fixture: ComponentFixture<ClientAssetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
