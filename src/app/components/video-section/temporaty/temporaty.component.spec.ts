import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporatyComponent } from './temporaty.component';

describe('TemporatyComponent', () => {
  let component: TemporatyComponent;
  let fixture: ComponentFixture<TemporatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporatyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
