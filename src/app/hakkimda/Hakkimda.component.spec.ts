/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HakkimdaComponent } from './Hakkimda.component';

describe('HakkimdaComponent', () => {
  let component: HakkimdaComponent;
  let fixture: ComponentFixture<HakkimdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HakkimdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HakkimdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
