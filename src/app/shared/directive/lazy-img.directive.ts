import { Directive, Input, HostBinding } from '@angular/core'
@Directive({
  selector: 'img[default]',
  host: {

    '(load)': 'load()',
    '[src]': 'src'
  }
})

export class LazyImgDirective {
  @Input() src: string;
  @Input() default: string;
  @HostBinding('class') className

  updateUrl() {
    this.src = this.default;
  }
  load() {
    this.className = 'image-loaded';
  }
}
