import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCardsComponent } from './render-cards.component';

describe('RenderCardsComponent', () => {
  let component: RenderCardsComponent;
  let fixture: ComponentFixture<RenderCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
