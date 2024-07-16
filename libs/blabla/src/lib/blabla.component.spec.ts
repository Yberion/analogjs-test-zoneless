import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlablaComponent } from './blabla.component';

describe('BlablaComponent', () => {
  let component: BlablaComponent;
  let fixture: ComponentFixture<BlablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlablaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlablaComponent);
    component = fixture.componentInstance;
  });

  it('should create', async () => {
    await fixture.whenStable();

    expect(component).toBeTruthy();
  });
});
