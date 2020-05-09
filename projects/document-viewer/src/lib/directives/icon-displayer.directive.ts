import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { IconType } from '../enum';

@Directive({
  selector: '[libIconDisplayer]'
})
export class IconDisplayerDirective implements OnInit {

  @Input() iconType: IconType;
  @Input() libIconDisplayer: HTMLElement;

  constructor() { }

  ngOnInit() {
    const iconTag = this.getIconTag();
    this.libIconDisplayer.insertAdjacentHTML('afterbegin', iconTag);
  }

  getIconTag() {
    switch(this.iconType) {
       case IconType.document: return '<i class="far fa-file" style="margin-right: 5px"></i>';
       case IconType.folder: return '<i class="far fa-folder" style="margin-right: 5px"></i>';
       default: return '<i class="far fa-file-image" style="margin-right: 5px"></i>';
    }
  }
}
