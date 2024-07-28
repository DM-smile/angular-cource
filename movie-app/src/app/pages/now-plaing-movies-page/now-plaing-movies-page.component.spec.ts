import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlaingMoviesPageComponent } from './now-plaing-movies-page.component';

describe('NowPlaingMoviesPageComponent', () => {
  let component: NowPlaingMoviesPageComponent;
  let fixture: ComponentFixture<NowPlaingMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlaingMoviesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowPlaingMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
