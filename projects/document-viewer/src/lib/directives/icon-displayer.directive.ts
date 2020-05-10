import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { ItemType } from '../enum';

@Directive({
  selector: '[libIconDisplayer]'
})
export class IconDisplayerDirective implements OnInit {

  @Input() iconType: ItemType;
  @Input() libIconDisplayer: HTMLElement;

  constructor() { }

  ngOnInit() {
    const iconTag = this.getIconTag();
    this.libIconDisplayer.insertAdjacentHTML('afterbegin', iconTag);
  }

  getIconTag() {
    switch(this.iconType) {
       case ItemType.document: return '<i class="far fa-file" style="margin-right: 5px"></i>';
       case ItemType.folder: return '<i class="far fa-folder" style="margin-right: 5px"></i>';
       default: return '<i class="far fa-file-image" style="margin-right: 5px"></i>';
    }
  }
}
