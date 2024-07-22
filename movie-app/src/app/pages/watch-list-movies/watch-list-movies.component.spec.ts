import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchListMoviesComponent } from './watch-list-movies.component';

describe('WatchListMoviesComponent', () => {
  let component: WatchListMoviesComponent;
  let fixture: ComponentFixture<WatchListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchListMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
