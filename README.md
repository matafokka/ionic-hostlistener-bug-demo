# Ionic @HostListener bug demo

This project demonstrates that in Android app `@HostListener()` on some `document` events doesn't work.

Project structure:

1. `src/app/home/` - bug demo. See the comments in `home.page.ts` for additional info.
2. `src/app/zone-run/` - `NgZone.run()` workaround.
3. `src/app/change-detector-ref/` - `ChangeDetectorRef` workaround.

Below I'll shortly explain the problem and workarounds

# Problem

Add a method like this to the page or component:

```ts
@HostListener("document:click")
onDocumentClick() {
  this.documentClickCount++;
}
```

And output `documentClickCount` in your HTML.

When you tap on the screen, value should update.

You'll see that it updates in a browser on both PC and Android, but doesn't in an Android app (apk).

The same thing happens with `document:pointerdown` and `document:pointerup` events. Maybe more events are affected.

I suspect that change detection is not triggered in such `@HostListener`-s for some reason. This is backed by the fact that provided workarounds work.

# NgZone.run() workaround

I prefer this one since you just need to wrap your code in it.

```ts
constructor(private zone: NgZone) {}

@HostListener("document:click")
onDocumentClick() {
  this.zone.run(() => this.documentClickCount++);
}
```

# ChangeDetectorRef workaround

With this you'll need to call `ChangeDetectorRef.detectChanges()` every time you `return` from your handler.

```ts
constructor(private changeDetectorRef: ChangeDetectorRef) {}

@HostListener("document:click")
onDocumentClick() {
  this.documentClickCount++;
  this.changeDetectorRef.detectChanges();
}
```