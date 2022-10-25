import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProfileDetailsComponent } from './table-profile-details.component';

describe('TableProfileDetailsComponent', () => {
  let component: TableProfileDetailsComponent;
  let fixture: ComponentFixture<TableProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
