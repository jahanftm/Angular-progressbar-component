import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarComponent } from './progressbar.component';
import {SimpleChange} from "@angular/core";

fdescribe('ProgressbarComponent', () => {
  let component: ProgressbarComponent;
  let fixture: ComponentFixture<ProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test calcProgress function', ()=> {
    component.currentTime = 5;
    component.end = 13;
    component.start = 1;
    component.ngOnInit();
    expect(component.calcProgress()).toBeCloseTo(33.33, 2);
  })

  it('test progress', () => {
    component.currentTime = 10;
    component.end = 30;
    component.start = 5;

    component.ngOnChanges({
      currentTime: new SimpleChange(0, component.currentTime, true)
    });

    fixture.detectChanges();
    expect(component.progress).toEqual('20%');
  })

  it('when the current time is greater than the end time', ()=> {
    component.currentTime = 50;
    component.end = 30;
    component.start = 5;
    expect(component.calcProgress()).toEqual(100);
  })
});
