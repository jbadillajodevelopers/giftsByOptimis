import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMiamiComponent } from './catalog-miami.component';

describe('CatalogMiamiComponent', () => {
  let component: CatalogMiamiComponent;
  let fixture: ComponentFixture<CatalogMiamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogMiamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogMiamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
