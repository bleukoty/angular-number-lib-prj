import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libDigitFormatter]'
})
export class DigitFormatterDirective {

  @Input() spacingCaracter = ' ';

  // Partant de la droite,
  // ce pattern matchs les 3 derniers chiffres de la chaîne de caractères
  // patternMilliers = /(?<=\d)\d{3}/g;
  pattern = /\d{3}\b/g;
  constructor() { }


  @HostListener('keyup', ['$event.target'])
  onKeyUp(target) {
    let value = target.value.replace(/ /g, '');
    let finMot: any;
    const result = [];

    /*
    1 : Itération en extrayant à chaque fois, les trois (3) derniers caractères du mot
    2 : l'itération prend fin lorsqu'on arrive pas à extraire les 3 derniers caractères du mot
    */
    do {
      finMot = value.match(this.pattern);
      if (finMot) {
        result.unshift(finMot[0]);
        value = value.replace(this.pattern, '');
      } else {
        result.unshift(value);
        value = null;
      }
    } while (value);

    target.value = result.join(this.spacingCaracter);

  }
}
