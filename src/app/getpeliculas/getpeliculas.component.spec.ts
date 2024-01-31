import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpeliculasComponent } from './getpeliculas.component';

describe('GetpeliculasComponent', () => {
  let component: GetpeliculasComponent;
  let fixture: ComponentFixture<GetpeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetpeliculasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetpeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
