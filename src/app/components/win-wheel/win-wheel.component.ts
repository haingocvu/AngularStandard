import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

import { IWinWheel } from '@app/interfaces/win-wheel.interface';
import { IStoreState } from '@app/interfaces/store.interface';
import { winWheelDataSelector } from '@app/store/selectors/win-wheel.selector';
import { IGenericReducerState } from '@app/interfaces/general-reducer-state.interface';
import {
  spinTheWheel,
  spinTheWheelReset,
} from '@app/store/actions/spin.actions';
import { ISpinResult } from '@app/interfaces/spin.interface';
import { spinDataSelector } from '@app/store/selectors/spin.selector';
import { customerInfoDataSelector } from '@app/store/selectors/customerInfo.selector';
import { ICustomerReducerState } from '@app/interfaces/customerInfo.interface';
import { MessageService } from '@app/services/message/message.service';
import { MatDialog } from '@angular/material/dialog';

declare let Winwheel: any;

@Component({
  selector: 'app-win-wheel',
  templateUrl: './win-wheel.component.html',
  styleUrls: ['./win-wheel.component.scss'],
})
export class WinWheelComponent implements OnInit, AfterViewInit {
  @ViewChild('spinResultSwal')
  public readonly spinResultSwal!: SwalComponent;
  @ViewChild('btnHidden') public readonly btnHidden!: HTMLButtonElement;
  constructor(
    private store: Store<IStoreState>,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    public dialog: MatDialog,
    public readonly swalTargets: SwalPortalTargets
  ) {
    this.winWheelData$ = this.store.select(winWheelDataSelector);
    this.spinData$ = this.store.select(spinDataSelector);
    this.winWheelData$.subscribe((data) => {
      this.winWheelRawData = data;
      this.setUpWinWheel();
      console.log(this.winWheelRawData);
    });
    this.spinData$.subscribe((data) => {
      this.spinRawData = data;
      const { isLoading, data: spinData } = this.spinRawData;
      if (!isLoading) this.spinner.hide();
      if (!isLoading && spinData) this.showSpinResult();
    });

    this.customerInfo$ = this.store.select(customerInfoDataSelector);
    this.customerInfo$.subscribe((data) => {
      this.customerInfoRawData = data;
    });

    this.messageService.currentMessage.subscribe((values) => {
      const { messageType } = values;
      switch (messageType) {
        case 1:
          this.startSpin();
          break;
        default:
          break;
      }
    });
  }

  winWheelData$: Observable<IGenericReducerState<IWinWheel>>;
  winWheelRawData: IGenericReducerState<IWinWheel> | null = null;
  spinData$: Observable<IGenericReducerState<ISpinResult>>;
  spinRawData: IGenericReducerState<ISpinResult> | null = null;
  customerInfo$: Observable<ICustomerReducerState>;
  customerInfoRawData: ICustomerReducerState | null = null;
  theWheel: any;
  wheelPower = 0;
  wheelSpinning = false;
  winningSegment: string = '';
  rewardType: string = '';
  audio = new Audio('../../../assets/media/tick.mp3');

  setUpWinWheel() {
    if (!this.winWheelRawData?.isLoading && this.winWheelRawData?.data) {
      for (let i = 0; i < this.winWheelRawData.data.spinSegments.length; i++) {
        const { id, color, segmentContent, obtainContent, contentColor } =
          this.winWheelRawData.data.spinSegments[i];
        this.theWheel.addSegment(
          {
            id,
            strokeStyle: 'transparent',
            fillStyle: color,
            text: segmentContent,
            obtainContent,
            textFillStyle: contentColor,
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
      outerRadius: 151, // Use these three properties to
      innerRadius: 34, // Set inner radius to make wheel hollow.
      centerX: 199.5, // correctly position the wheel
      centerY: 228, // over the background.
      lineWidth: 2,
      numSegments: 0,
      textFontSize: 10,
      textAlignment: 'inner',
      textMargin: 6,
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
    this.theWheel.rotationAngle = this.theWheel.animation.stopAngle;
    // this.theWheel.draw();
    this.wheelSpinning = false;
  }

  alertPrize(): void {
    const btnHidden = window.document.getElementById('btnHidden');
    btnHidden?.click();
    this.resetWheel();
  }

  fireEvent() {
    this.spinResultSwal.fire();
  }

  public startSpin(): void {
    this.checkAvailable();
  }

  checkAvailable() {
    const isSpinEnd = this.spinRawData?.isLoaded;
    const remainingTurns = isSpinEnd
      ? this.spinRawData?.data?.remainingTurns
      : this.customerInfoRawData?.data?.remainingTurns;
    if (remainingTurns && !this.wheelSpinning) {
      if (this.wheelPower === 1) {
        this.theWheel.animation.spins = 3;
      } else if (this.wheelPower === 2) {
        this.theWheel.animation.spins = 8;
      } else if (this.wheelPower === 3) {
        this.theWheel.animation.spins = 15;
      }
      this.store.dispatch(spinTheWheelReset());
      this.store.dispatch(
        spinTheWheel({
          campaignId: this.winWheelRawData?.data?.id,
          headerConfig: new HttpHeaders()
            .append(
              'X-Auth-Code',
              this.customerInfoRawData?.loginInfo?.contractNumber + '' || ''
            )
            .append(
              'X-Auth-Phone',
              this.customerInfoRawData?.loginInfo?.phoneNumber + '' || ''
            )
            .append(
              'X-Auth-Campaign-Version',
              this.winWheelRawData?.data?.version + '' || ''
            ),
        })
      );
      this.spinner.show();
    }
  }

  showSpinResult() {
    const data = this.spinRawData?.data;
    const isLoading = this.spinRawData?.isLoading;
    if (!isLoading && data) {
      const { obtainSpinSegmentId } = data;
      const segmentIndex = this.winWheelRawData?.data?.spinSegments.findIndex(
        (value) => value.id === obtainSpinSegmentId
      );
      if (segmentIndex && segmentIndex >= 0) {
        // Get random angle inside specified segment of the wheel.
        let stopAt = this.theWheel.getRandomForSegment(segmentIndex + 1);
        this.winningSegment =
          this.winWheelRawData?.data?.spinSegments[segmentIndex]
            .obtainContent || '';
        this.rewardType =
          this.winWheelRawData?.data?.spinSegments[segmentIndex].type || '';

        // Important thing is to set the stopAngle of the animation before stating the spin.
        this.theWheel.animation.stopAngle = stopAt;

        // Start the spin animation here.
        this.wheelSpinning = true;
        this.theWheel.startAnimation();
      }
    }
  }
}
