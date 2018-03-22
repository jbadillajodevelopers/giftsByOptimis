import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCostaRicaComponent } from './catalog-costa-rica.component';

describe('CatalogCostaRicaComponent', () => {
  let component: CatalogCostaRicaComponent;
  let fixture: ComponentFixture<CatalogCostaRicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogCostaRicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogCostaRicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
