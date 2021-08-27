import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectiveFootwearWrapperContainer } from './protective-footwear-wrapper.container';

describe('ProtectiveFootwearWrapperComponent', () => {
  let component: ProtectiveFootwearWrapperContainer;
  let fixture: ComponentFixture<ProtectiveFootwearWrapperContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectiveFootwearWrapperContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectiveFootwearWrapperContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
