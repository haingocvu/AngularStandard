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
      outerRadius: 173.5, // Use these three properties to
      innerRadius: 27.5, // Set inner radius to make wheel hollow.
      centerX: 201.5, // correctly position the wheel
      centerY: 207.5, // over the background.
      lineWidth: 2,
      numSegments: 8,
      textFontSize: 14,
      responsive: true, // This wheel is responsive!
      segments: [
        {
          id: 'b91f1602-784b-46c5-9f63-21203381df10',
          strokeStyle: 'transparent',
          fillStyle: '#eae56f',
          text: 'Không trúng',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc Quý khách may mắn lần sau.<br></p>',
        },
        {
          id: 'b52f12bf-5188-4509-9b91-5f601a028326',
          strokeStyle: 'transparent',
          fillStyle: '#89f26e',
          text: '1$',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc mừng Quý khách quay trúng&nbsp;<span style="font-weight: 700;">1$</span>.</p><p style="margin-bottom: 0px;">Vui lòng vào mục&nbsp;<span style="font-weight: 700;">Giỏ quà</span>&nbsp;để xem các phần thưởng.</p>',
        },
        {
          id: 'b91f1602-784b-46c5-9f63-21203381df10',
          strokeStyle: 'transparent',
          fillStyle: '#eae56f',
          text: 'Không trúng',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc Quý khách may mắn lần sau.<br></p>',
        },
        {
          id: 'b52f12bf-5188-4509-9b91-5f601a028326',
          strokeStyle: 'transparent',
          fillStyle: '#89f26e',
          text: '1$',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc mừng Quý khách quay trúng&nbsp;<span style="font-weight: 700;">1$</span>.</p><p style="margin-bottom: 0px;">Vui lòng vào mục&nbsp;<span style="font-weight: 700;">Giỏ quà</span>&nbsp;để xem các phần thưởng.</p>',
        },
        {
          id: 'b91f1602-784b-46c5-9f63-21203381df10',
          strokeStyle: 'transparent',
          fillStyle: '#eae56f',
          text: 'Không trúng',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc Quý khách may mắn lần sau.<br></p>',
        },
        {
          id: 'b52f12bf-5188-4509-9b91-5f601a028326',
          strokeStyle: 'transparent',
          fillStyle: '#89f26e',
          text: '1$',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc mừng Quý khách quay trúng&nbsp;<span style="font-weight: 700;">1$</span>.</p><p style="margin-bottom: 0px;">Vui lòng vào mục&nbsp;<span style="font-weight: 700;">Giỏ quà</span>&nbsp;để xem các phần thưởng.</p>',
        },
        {
          id: 'b91f1602-784b-46c5-9f63-21203381df10',
          strokeStyle: 'transparent',
          fillStyle: '#eae56f',
          text: 'Không trúng',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc Quý khách may mắn lần sau.<br></p>',
        },
        {
          id: 'b52f12bf-5188-4509-9b91-5f601a028326',
          strokeStyle: 'transparent',
          fillStyle: '#89f26e',
          text: '1$',
          obtainContent:
            '<p style="margin-bottom: 0px;">Xin chúc mừng Quý khách quay trúng&nbsp;<span style="font-weight: 700;">1$</span>.</p><p style="margin-bottom: 0px;">Vui lòng vào mục&nbsp;<span style="font-weight: 700;">Giỏ quà</span>&nbsp;để xem các phần thưởng.</p>',
        },
      ],
    });
  }

  ngOnInit(): void {}
}
