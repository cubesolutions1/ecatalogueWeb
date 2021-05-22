import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguevisiteComponent } from './cataloguevisite.component';

describe('CataloguevisiteComponent', () => {
  let component: CataloguevisiteComponent;
  let fixture: ComponentFixture<CataloguevisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataloguevisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataloguevisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
