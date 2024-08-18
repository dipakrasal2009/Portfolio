import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchEc2InstanceComponent } from './launch-ec2-instance.component';

describe('LaunchEc2InstanceComponent', () => {
  let component: LaunchEc2InstanceComponent;
  let fixture: ComponentFixture<LaunchEc2InstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchEc2InstanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchEc2InstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
