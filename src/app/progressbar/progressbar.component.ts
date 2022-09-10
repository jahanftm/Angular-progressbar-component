import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit, OnChanges {

  progress: string = '0%';

  @Input()
  start = 0;

  @Input()
  end = 0;

  @Input()
  currentTime = 0;

  @Input()
  backgroundColor: string = '#0040ff';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['currentTime'].currentValue !== changes['currentTime'].previousValue) {
      this.progress = this.calcProgress() + '%';
    }
  }

  ngOnInit(): void {

  }

  calcProgress(): number {
    if (this.currentTime >= this.end) {
      return 100;
    }
    return ((this.currentTime - this.start) / (this.end - this.start)) * 100;
  }

}
