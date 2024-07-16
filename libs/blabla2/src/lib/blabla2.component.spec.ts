import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blabla2Component } from './blabla2.component';

describe('blabla2Component', () => {
  let component: Blabla2Component;
  let fixture: ComponentFixture<Blabla2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blabla2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Blabla2Component);
    component = fixture.componentInstance;
  });

  it('should create', async () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
