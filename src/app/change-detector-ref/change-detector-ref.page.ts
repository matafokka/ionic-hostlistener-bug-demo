import { ChangeDetectorRef, Component, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-change-detector-ref',
  templateUrl: 'change-detector-ref.page.html',
  styleUrls: ['change-detector-ref.page.scss'],
})
export class ChangeDetectorRefPage {

  // Counters for document HostListeners

  documentClickCount = 0;
  documentPointerDownCount = 0;
  documentPointerUpCount = 0;

  // Counters for window HostListeners

  windowClickCount = 0;
  windowPointerDownCount = 0;
  windowPointerUpCount = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  // Document event listeners

  @HostListener("document:click")
  onDocumentClick() {
    this.documentClickCount++;
    this.changeDetectorRef.detectChanges();
  }

  @HostListener("document:pointerdown")
  onDocumentPointerDown() {
    this.documentPointerDownCount++;
    this.changeDetectorRef.detectChanges();
  }

  @HostListener("document:pointerup")
  onDocumentPointerUp() {
    this.documentPointerUpCount++;
    this.changeDetectorRef.detectChanges();
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
