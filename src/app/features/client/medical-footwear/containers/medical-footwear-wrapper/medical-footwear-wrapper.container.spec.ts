import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFootwearWrapperContainer } from './medical-footwear-wrapper.container';

describe('MedicalFootwearWrapperContainer', () => {
  let component: MedicalFootwearWrapperContainer;
  let fixture: ComponentFixture<MedicalFootwearWrapperContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFootwearWrapperContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFootwearWrapperContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
