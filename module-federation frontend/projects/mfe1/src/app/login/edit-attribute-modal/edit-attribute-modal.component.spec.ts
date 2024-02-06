import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttributeModalComponent } from './edit-attribute-modal.component';

describe('EditAttributeModalComponent', () => {
  let component: EditAttributeModalComponent;
  let fixture: ComponentFixture<EditAttributeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAttributeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAttributeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
