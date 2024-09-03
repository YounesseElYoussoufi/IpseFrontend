import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetteListComponentComponent } from './dette-list-component.component';

describe('DetteListComponentComponent', () => {
  let component: DetteListComponentComponent;
  let fixture: ComponentFixture<DetteListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetteListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetteListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
