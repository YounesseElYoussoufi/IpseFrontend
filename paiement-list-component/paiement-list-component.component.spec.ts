import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementListComponentComponent } from './paiement-list-component.component';

describe('PaiementListComponentComponent', () => {
  let component: PaiementListComponentComponent;
  let fixture: ComponentFixture<PaiementListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaiementListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
