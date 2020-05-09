import { Directive, HostListener, Input, HostBinding, SimpleChanges, OnChanges } from '@angular/core';
import { DisplayMode } from '../enum';

@Directive({
  selector: '[libToogleButton]'
})
export class ToogleButtonDirective {

  @Input('libToogleButton') component: HTMLElement;
  @Input() indicator: boolean;
  @Input() toogleProperty: string;
  @Input() toogleValues: Array<string>;

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.indicator) {
      if (changes.indicator.currentValue) {
        this.component[this.toogleProperty] = this.toogleValues[0]; // 'Dossier actif <i class="fas fa-arrow-alt-circle-right"></i>';
      } else {
        this.component[this.toogleProperty] = this.toogleValues[1]; // '<i class="fas fa-arrow-alt-circle-left"></i> Liste des dossiers';
      }
    }
  }

}
