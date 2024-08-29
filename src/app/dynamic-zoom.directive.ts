import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicZoom]'
})
export class DynamicZoomDirective {

  @Input('appDynamicZoom') zoomFactor: number = 1; // Fattore di ingrandimento

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.scaleElement(this.zoomFactor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scaleElement(1);
  }

  private scaleElement(scale: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.2s ease-in-out');
  }
}
