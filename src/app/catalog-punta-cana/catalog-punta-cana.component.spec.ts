import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPuntaCanaComponent } from './catalog-punta-cana.component';

describe('CatalogPuntaCanaComponent', () => {
  let component: CatalogPuntaCanaComponent;
  let fixture: ComponentFixture<CatalogPuntaCanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogPuntaCanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPuntaCanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
