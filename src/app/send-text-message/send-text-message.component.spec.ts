import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTextMessageComponent } from './send-text-message.component';

describe('SendTextMessageComponent', () => {
  let component: SendTextMessageComponent;
  let fixture: ComponentFixture<SendTextMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendTextMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendTextMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
