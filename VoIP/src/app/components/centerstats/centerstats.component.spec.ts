import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterstatsComponent } from './centerstats.component';

describe('CenterstatsComponent', () => {
  let component: CenterstatsComponent;
  let fixture: ComponentFixture<CenterstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterstatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
