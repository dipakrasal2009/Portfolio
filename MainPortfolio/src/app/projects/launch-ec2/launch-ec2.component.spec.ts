import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchEC2Component } from './launch-ec2.component';

describe('LaunchEC2Component', () => {
  let component: LaunchEC2Component;
  let fixture: ComponentFixture<LaunchEC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchEC2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchEC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
