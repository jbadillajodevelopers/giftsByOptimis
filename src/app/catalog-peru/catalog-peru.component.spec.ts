import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPeruComponent } from './catalog-peru.component';

describe('CatalogPeruComponent', () => {
  let component: CatalogPeruComponent;
  let fixture: ComponentFixture<CatalogPeruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogPeruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
