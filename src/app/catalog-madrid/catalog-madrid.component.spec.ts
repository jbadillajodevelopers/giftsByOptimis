import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMadridComponent } from './catalog-madrid.component';

describe('CatalogMadridComponent', () => {
  let component: CatalogMadridComponent;
  let fixture: ComponentFixture<CatalogMadridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogMadridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
