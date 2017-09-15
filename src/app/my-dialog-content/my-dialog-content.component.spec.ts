import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogContentComponent } from './my-dialog-content.component';

describe('MyDialogContentComponent', () => {
  let component: MyDialogContentComponent;
  let fixture: ComponentFixture<MyDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
