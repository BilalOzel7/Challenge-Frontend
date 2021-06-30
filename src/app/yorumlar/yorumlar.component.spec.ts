/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YorumlarComponent } from './yorumlar.component';

describe('YorumlarComponent', () => {
  let component: YorumlarComponent;
  let fixture: ComponentFixture<YorumlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YorumlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YorumlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
