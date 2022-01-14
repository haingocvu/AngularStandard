import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private iconReg: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconReg.addSvgIcon(
      'giftBox',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/giftbox.svg')
    );
  }

  ngOnInit(): void {}
}
