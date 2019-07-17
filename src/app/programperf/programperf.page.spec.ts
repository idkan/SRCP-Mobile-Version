import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramperfPage } from './programperf.page';

describe('ProgramperfPage', () => {
  let component: ProgramperfPage;
  let fixture: ComponentFixture<ProgramperfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramperfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramperfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
