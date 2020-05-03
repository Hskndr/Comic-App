import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTarjetasComponent } from './heroe-tarjetas.component';

describe('HeroeTarjetasComponent', () => {
  let component: HeroeTarjetasComponent;
  let fixture: ComponentFixture<HeroeTarjetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeTarjetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
