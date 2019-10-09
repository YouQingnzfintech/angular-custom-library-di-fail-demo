import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrankAngularComponentsComponent } from './crank-angular-components.component';

describe('CrankAngularComponentsComponent', () => {
  let component: CrankAngularComponentsComponent;
  let fixture: ComponentFixture<CrankAngularComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrankAngularComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrankAngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
