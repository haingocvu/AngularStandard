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
      outerRadius: 172, // Use these three properties to
      innerRadius: 27.5, // Set inner radius to make wheel hollow.
      centerX: 201.5, // correctly position the wheel
      centerY: 207, // over the background.
      lineWidth: 2,
      numSegments: 12,
      textFontSize: 14,
      responsive: true, // This wheel is responsive!
      segments: [
        { fillStyle: '#eae56f', text: 'Prize One' },
        { fillStyle: '#89f26e', text: 'Prize Two' },
        { fillStyle: '#7de6ef', text: 'Prize Three' },
        { fillStyle: '#e7706f', text: 'Prize Four' },
        { fillStyle: '#eae56f', text: 'Prize One' },
        { fillStyle: '#89f26e', text: 'Prize Two' },
        { fillStyle: '#7de6ef', text: 'Prize Three' },
        { fillStyle: '#e7706f', text: 'Prize Four' },
        { fillStyle: '#eae56f', text: 'Prize One' },
        { fillStyle: '#89f26e', text: 'Prize Two' },
        { fillStyle: '#7de6ef', text: 'Prize Three' },
        { fillStyle: '#e7706f', text: 'Prize Four' },
      ],
    });
  }

  ngOnInit(): void {}
}
