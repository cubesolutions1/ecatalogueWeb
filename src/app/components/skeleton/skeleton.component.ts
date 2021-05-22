import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {

  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle;

  constructor() { }

  ngOnInit() {
  }

  getMyStyles() {
    const myStyles = {
        'width': this.Cwidth ? this.Cwidth : '',
        'height': this.Cheight ? this.Cheight : '',
        'border-radius': this.circle ? this.circle : ''
    };
    return myStyles;
}
}
