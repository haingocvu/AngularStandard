import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpHeaders } from '@angular/common/http';

import { WinWheelModel } from '@app/interfaces/win-wheel.interface';
import { StoreInterface } from '@app/interfaces/store.interface';
import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { GenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import { spinTheWheel } from '@app/store/actions/spin.actions';
declare let Winwheel: any;

@Component({
  selector: 'app-win-wheel',
  templateUrl: './win-wheel.component.html',
  styleUrls: ['./win-wheel.component.scss'],
})
export class WinWheelComponent implements OnInit, AfterViewInit {
  constructor(private store: Store<StoreInterface>) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.winWheelData$.subscribe((data) => {
      this.winWheelRawData = data;
      this.setUpWinWheel();
      console.log(this.winWheelRawData);
    });
  }

  winWheelData$: Observable<GenericReducerState<WinWheelModel>>;
  winWheelRawData: GenericReducerState<WinWheelModel> | null = null;
  theWheel: any;
  wheelPower = 0;
  wheelSpinning = false;
  winningSegment: string = '';
  audio = new Audio('/assets/media/tick.mp3');

  setUpWinWheel() {
    if (!this.winWheelRawData?.isLoading && this.winWheelRawData?.data) {
      for (let i = 0; i < this.winWheelRawData.data.spinSegments.length; i++) {
        const { id, color, segmentContent, obtainContent } =
          this.winWheelRawData.data.spinSegments[i];
        this.theWheel.addSegment(
          {
            id,
            strokeStyle: 'transparent',
            fillStyle: color,
            text: segmentContent,
            obtainContent,
          },
          i + 1
        );
      }
      this.theWheel.draw();
    }
  }

  playSound() {
    // Stop and rewind the sound (stops it if already playing).
    console.log(this.audio);
    this.audio.pause();
    this.audio.currentTime = 0;

    // Play the sound.
    this.audio.play();
  }
  ngAfterViewInit(): void {
    this.theWheel = new Winwheel({
      outerRadius: 173.5, // Use these three properties to
      innerRadius: 27.5, // Set inner radius to make wheel hollow.
      centerX: 201.5, // correctly position the wheel
      centerY: 207.5, // over the background.
      lineWidth: 2,
      numSegments: 0,
      textFontSize: 10,
      responsive: true, // This wheel is responsive!
      segments: [],
      animation: {
        type: 'spinToStop',
        duration: 5,
        spins: 8,
        callbackFinished: this.alertPrize.bind(this),
        callbackSound: () => this.playSound(), // Specify function to call when sound is to be triggered
      },
    });
  }

  ngOnInit(): void {}

  resetWheel(): void {
    this.theWheel.stopAnimation(false);
    this.theWheel.rotationAngle = 0;
    // this.theWheel.draw();
    this.wheelSpinning = false;
  }

  alertPrize(): void {
    this.winningSegment = this.theWheel.getIndicatedSegment().text;
    alert('You have won ' + this.theWheel.getIndicatedSegment().text);
    this.resetWheel();
  }

  startSpin(): void {
    if (this.wheelSpinning === false) {
      if (this.wheelPower === 1) {
        this.theWheel.animation.spins = 3;
      } else if (this.wheelPower === 2) {
        this.theWheel.animation.spins = 8;
      } else if (this.wheelPower === 3) {
        this.theWheel.animation.spins = 15;
      }
      this.store.dispatch(
        spinTheWheel({
          campaignId: this.winWheelRawData?.data?.id,
          headerConfig: new HttpHeaders()
            .append('X-Auth-Code', 'A1')
            .append('X-Auth-Phone', '0949939393')
            .append('X-Auth-Campaign-Version', '1'),
        })
      );
      this.theWheel.startAnimation();
      this.wheelSpinning = true;
    }
  }
}
