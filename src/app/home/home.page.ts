import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Counters for document HostListeners

  documentClickCount = 0;
  documentPointerDownCount = 0;
  documentPointerUpCount = 0;

  // Counters for window HostListeners

  windowClickCount = 0;
  windowPointerDownCount = 0;
  windowPointerUpCount = 0;

  ionicButtonClickCount = 0; // Counter for Ionic button clicks

  constructor() {}

  // Document event listeners

  @HostListener("document:click")
  onDocumentClick() {
    this.documentClickCount++;
    console.log("[BUG] Document click count:", this.documentClickCount);
  }

  @HostListener("document:pointerdown")
  onDocumentPointerDown() {
    this.documentPointerDownCount++;
    console.log("[BUG] Document pointer down count:", this.documentPointerDownCount);
  }

  @HostListener("document:pointerup")
  onDocumentPointerUp() {
    this.documentPointerUpCount++;
    console.log("[BUG] Document pointer up count:", this.documentPointerUpCount);
  }

  // Window event listeners

  // These seem to work just fine.
  // I've provided description on document event listener behavior changes when uncommenting window event listeners.
  // I'm sure that this is irrelevant to the problem, but I felt like I still should do it.

  // Uncommentig only this one makes document listeners update on click.
  // document:pointerup and document:pointerdown events fired when holding finger or swiping still don't work.

  /*
  @HostListener("window:click")
  onWindowClick() {
    this.windowClickCount++;
    console.log("[BUG] Window click count:", this.windowClickCount);
  }
  */

  // Uncommenting only this one makes:
  // 1. document:pointerdown work.
  // 2. document:click update from 0 and after holding or swiping only after second click. Displayed value is: documentClickCount - 1.
  // 3. document:pointerup update from 0 only after second click. Displayed value is: documentPointerUpCount - 1.

  /*
  @HostListener("window:pointerdown")
  onWindowPointerDown() {
    this.windowPointerDownCount++;
    console.log("[BUG] Window pointer down count:", this.windowPointerDownCount);
  }
  */

  // Uncommenting only this one makes:
  // 1. document:pointerdown and document:pointerup update on first click.
  // 2. document:click update after second click.
  // 3. Everything update after holding or swiping and after click. Displayed values are competely off.
  // Well, the behavior is weird, and I might have missed something in the list above.

  /*
  @HostListener("window:pointerup")
  onWindowPointerUp() {
    this.windowPointerUpCount++;
    console.log("[BUG] Window pointer up count:", this.windowPointerUpCount);
  }
  */

  // Ionic button listener

  onIonicButtonClick() {
    this.ionicButtonClickCount++;
    console.log("[BUG] Ionic button click count:", this.ionicButtonClickCount);
  }

}
