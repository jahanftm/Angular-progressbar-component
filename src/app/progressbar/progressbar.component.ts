import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  progress: string = '0%';

  @Input()
  start = 0;

  @Input()
  end = 0;

  @Input()
  now = 0;

  @Input()
  backgroundColor: string = '#0040ff';

  constructor() {
  }

  ngOnInit(): void {
    this.progress = this.calcProgress() + '%';
  }

  calcProgress(): number {
    return ((this.now - this.start) / (this.end - this.start)) * 100;
  }

}
