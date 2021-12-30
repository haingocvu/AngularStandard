import { AfterViewInit, Component, OnInit } from '@angular/core';

declare let Winwheel: any;

@Component({
  selector: 'app-win-wheel',
  templateUrl: './win-wheel.component.html',
  styleUrls: ['./win-wheel.component.scss'],
})
export class WinWheelComponent implements OnInit, AfterViewInit {
  constructor() {}

  theWheel: any;

  ngAfterViewInit(): void {
    this.theWheel = new Winwheel({
      outerRadius: 146, // Use these three properties to
      centerX: 200, // correctly position the wheel
      centerY: 201, // over the background.
      lineWidth: 2,
      numSegments: 4,
      segments: [
        { fillStyle: '#eae56f', text: 'Prize One' },
        { fillStyle: '#89f26e', text: 'Prize Two' },
        { fillStyle: '#7de6ef', text: 'Prize Three' },
        { fillStyle: '#e7706f', text: 'Prize Four' },
      ],
    });
  }

  ngOnInit(): void {}
}
