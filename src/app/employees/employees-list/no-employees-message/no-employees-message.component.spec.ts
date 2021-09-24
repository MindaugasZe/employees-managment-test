import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEmployeesMessageComponent } from './no-employees-message.component';

describe('NoEmployeesMessageComponent', () => {
  let component: NoEmployeesMessageComponent;
  let fixture: ComponentFixture<NoEmployeesMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEmployeesMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEmployeesMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
