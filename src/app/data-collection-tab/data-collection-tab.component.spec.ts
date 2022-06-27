import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionTabComponent } from './data-collection-tab.component';

describe('DataCollectionTabComponent', () => {
  let component: DataCollectionTabComponent;
  let fixture: ComponentFixture<DataCollectionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCollectionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCollectionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
