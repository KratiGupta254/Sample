import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspopupComponent } from './transpopup.component';

describe('TranspopupComponent', () => {
  let component: TranspopupComponent;
  let fixture: ComponentFixture<TranspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranspopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
