import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'progressbar';

  currentTime = 10;

  ngOnInit() {
    setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime)
    }, 1000)
  }
}
