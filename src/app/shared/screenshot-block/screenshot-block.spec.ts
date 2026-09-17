import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotBlockComponent } from './screenshot-block';

describe('ScreenshotBlockComponent', () => {
  let component: ScreenshotBlockComponent;
  let fixture: ComponentFixture<ScreenshotBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenshotBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenshotBlockComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
