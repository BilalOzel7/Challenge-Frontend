/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YapilanİslerComponent } from './yapilanİsler.component';

describe('YapilanİslerComponent', () => {
  let component: YapilanİslerComponent;
  let fixture: ComponentFixture<YapilanİslerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YapilanİslerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YapilanİslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
