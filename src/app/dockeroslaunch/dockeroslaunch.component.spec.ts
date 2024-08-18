import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockeroslaunchComponent } from './dockeroslaunch.component';

describe('DockeroslaunchComponent', () => {
  let component: DockeroslaunchComponent;
  let fixture: ComponentFixture<DockeroslaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DockeroslaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DockeroslaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
