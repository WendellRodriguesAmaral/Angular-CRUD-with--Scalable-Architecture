import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMEssageComponent } from './validation-message.component';

describe('MensagemValidacaoComponent', () => {
  let component: ValidationMEssageComponent;
  let fixture: ComponentFixture<ValidationMEssageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationMEssageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMEssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
