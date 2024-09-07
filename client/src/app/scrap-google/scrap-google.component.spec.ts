import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapGoogleComponent } from './scrap-google.component';

describe('ScrapGoogleComponent', () => {
  let component: ScrapGoogleComponent;
  let fixture: ComponentFixture<ScrapGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrapGoogleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrapGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
