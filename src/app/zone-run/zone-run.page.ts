import { Component, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-run',
  templateUrl: 'zone-run.page.html',
  styleUrls: ['zone-run.page.scss'],
})
export class ZoneRunPage {

  // Counters for document HostListeners

  documentClickCount = 0;
  documentPointerDownCount = 0;
  documentPointerUpCount = 0;

  // Counters for window HostListeners

  windowClickCount = 0;
  windowPointerDownCount = 0;
  windowPointerUpCount = 0;

  constructor(private zone: NgZone) { }

  // Document event listeners

  @HostListener("document:click")
  onDocumentClick() {
    this.zone.run(() => this.documentClickCount++)
  }

  @HostListener("document:pointerdown")
  onDocumentPointerDown() {
    this.zone.run(() => this.documentPointerDownCount++);
  }

  @HostListener("document:pointerup")
  onDocumentPointerUp() {
    this.zone.run(() => this.documentPointerUpCount++);
  }

  // Window event listeners

  /*
  @HostListener("window:click")
  onWindowClick() {
    this.windowClickCount++;
    console.log("[BUG] Window click count:", this.windowClickCount);
  }
  */

  /*
  @HostListener("window:pointerdown")
  onWindowPointerDown() {
    this.windowPointerDownCount++;
    console.log("[BUG] Window pointer down count:", this.windowPointerDownCount);
  }
  */

  /*
  @HostListener("window:pointerup")
  onWindowPointerUp() {
    this.windowPointerUpCount++;
    console.log("[BUG] Window pointer up count:", this.windowPointerUpCount);
  }
  */

}
