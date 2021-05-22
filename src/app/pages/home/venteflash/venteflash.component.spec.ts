/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VenteflashComponent } from './venteflash.component';

describe('VenteflashComponent', () => {
  let component: VenteflashComponent;
  let fixture: ComponentFixture<VenteflashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteflashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteflashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
