// import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

// @Directive({
//   selector: 'libPhoneFormatter'
// })
// export class PhoneFormatterDirective implements OnInit {

//   constructor(private element: ElementRef) {
//     console.log('my directive works !!');
//   }

//   ngOnInit(): void {
//     console.log('default');
//   }

//   @HostListener('mouseenter') applyBackgroundColor() {
//     console.log('survol');
//   }

//   @HostListener('keyup') onKeyUp() {
//     console.log('key up');
//     console.log('element', this.element.nativeElement);
//   }

// }

import { Directive, HostListener, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[libPhoneFormatter]',
})
export class PhoneFormatterDirective {
  pattern = /\d{2}/g;

  @HostBinding()
  @Input() maxLength = 11; // limits the number of characters entered

  constructor() {}

  @HostListener('keyup', ['$event.target']) onKeyUpEvent(input: any) {
    let value = input.value.replace(/\D/g, ''); // Removes all non-digit characters
    if (value) {
      let macths: any;
      let result = [];

      // its goals is to build an array ["dd", "dd", "dd", "dd" ]
      do {
        macths = value.match(this.pattern);
        if (macths) {
          result = macths;
          value = value.replace(this.pattern, '');
        } else {
          result.push(value);
          value = null;
        }
      } while (value);

      // formatted value
      input.value = result.join(' ');
    } else {
      input.value = value; // clean digits
    }
  }
}
