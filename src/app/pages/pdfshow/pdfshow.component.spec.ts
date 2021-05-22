import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfshowComponent } from './pdfshow.component';

describe('PdfshowComponent', () => {
  let component: PdfshowComponent;
  let fixture: ComponentFixture<PdfshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
