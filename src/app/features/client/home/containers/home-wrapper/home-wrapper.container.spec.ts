import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWrapperContainer } from './home-wrapper.container';

describe('HomeWrapperContainer', () => {
  let component: HomeWrapperContainer;
  let fixture: ComponentFixture<HomeWrapperContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWrapperContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWrapperContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
