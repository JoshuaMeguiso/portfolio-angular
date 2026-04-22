import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotBlock } from './screenshot-block';

describe('ScreenshotBlock', () => {
  let component: ScreenshotBlock;
  let fixture: ComponentFixture<ScreenshotBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenshotBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenshotBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
