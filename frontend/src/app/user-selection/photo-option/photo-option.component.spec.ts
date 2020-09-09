import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoOptionComponent } from './photo-option.component';

describe('PhotoOptionComponent', () => {
  let component: PhotoOptionComponent;
  let fixture: ComponentFixture<PhotoOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
