import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface WebElementWrapperOptions {
  loadRemoteBundle: () => Promise<void>;
  selector: string;
}

@Component({
  selector: 'app-web-component-wrapper',
  standalone: true,
  template: `<div #vc></div>`,
})
export class WebElementWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('vc', { static: true, read: ElementRef })
  vc!: ElementRef<HTMLDivElement>;
  private readonly route = inject(ActivatedRoute);
  element!: HTMLElement;

  async ngOnInit(): Promise<void> {
    const { loadRemoteBundle, selector } = this.route.snapshot
      .data as WebElementWrapperOptions;
    await loadRemoteBundle();

    this.element = document.createElement(selector);
    this.vc.nativeElement.appendChild(this.element);
  }
  ngOnDestroy(): void {
    //

    if (this.element) {
      this.vc.nativeElement.removeChild(this.element);
    }
  }
}
