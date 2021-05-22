/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnseigneComponent } from './enseigne.component';

describe('ConfianceComponent', () => {
  let component: EnseigneComponent;
  let fixture: ComponentFixture<EnseigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
