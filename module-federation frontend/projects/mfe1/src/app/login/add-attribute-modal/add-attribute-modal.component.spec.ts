import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttributeModalComponent } from './add-attribute-modal.component';

describe('AddAttributeModalComponent', () => {
  let component: AddAttributeModalComponent;
  let fixture: ComponentFixture<AddAttributeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttributeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAttributeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
