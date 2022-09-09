import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarComponent } from './progressbar.component';

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
    component.now = 5;
    component.end = 13;
    component.start = 1;
    component.ngOnInit();
    expect(component.calcProgress()).toBeCloseTo(33.33, 2);
  })

  it('test progress', () => {
    component.now = 10;
    component.end = 30;
    component.start = 5;
    component.ngOnInit();
    expect(component.progress).toEqual('20%');
  })

  it('now time greater than end time', ()=> {
    component.now = 50;
    component.end = 30;
    component.start = 5;
    expect(component.calcProgress()).toEqual(100);
  })
});
