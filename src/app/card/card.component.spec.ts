import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {By} from "@angular/platform-browser";
import {Component, DebugElement} from "@angular/core";

@Component({
  template: `<app-card>
    <div>it is body</div>
  </app-card>`,
})
class TestHostComponent {}

fdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, TestHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ng content', () => {
    const testFixture = TestBed.createComponent(TestHostComponent);

    const de: DebugElement = testFixture.debugElement.query(
      By.css('.body')
    );
    const el: Element = de.nativeElement;

    expect(el.innerHTML).toEqual('<div>it is body</div>');
  });
});
