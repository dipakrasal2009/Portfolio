import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoCordinateComponent } from './geo-cordinate.component';

describe('GeoCordinateComponent', () => {
  let component: GeoCordinateComponent;
  let fixture: ComponentFixture<GeoCordinateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeoCordinateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeoCordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
