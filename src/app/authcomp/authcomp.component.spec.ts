import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthcompComponent } from './authcomp.component';

describe('AuthcompComponent', () => {
  let component: AuthcompComponent;
  let fixture: ComponentFixture<AuthcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
