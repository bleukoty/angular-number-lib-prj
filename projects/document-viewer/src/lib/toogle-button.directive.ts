import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[libToogleButton]'
})
export class ToogleButtonDirective {

  constructor() {
    console.log('constructeur');
   }

  @HostListener('click', ['$event'])
  public onClick(event: any) {
    console.log('test');
    event.stopPropagation();
    console.log('end prop');
  }

  // @HostListener("click", ["$event"])
  // public onClick(event: any): void
  // {
  //     event.stopPropagation();
  // }

}
