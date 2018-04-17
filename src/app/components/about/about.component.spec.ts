import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in an h2 tag', () => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should have <p> with description about the app', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('h1').textContent)
      .toContain('Welcome to app!');
  });
});
