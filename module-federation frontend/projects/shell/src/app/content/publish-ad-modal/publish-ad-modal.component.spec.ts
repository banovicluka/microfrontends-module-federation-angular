import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAdModalComponent } from './publish-ad-modal.component';

describe('PublishAdModalComponent', () => {
  let component: PublishAdModalComponent;
  let fixture: ComponentFixture<PublishAdModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishAdModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishAdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
