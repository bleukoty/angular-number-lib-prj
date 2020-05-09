import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DisplayMode } from './enum';

@Component({
  // encapsulation: ViewEncapsulation.None,
  selector: 'lib-document-viewer',
  templateUrl: '../lib/document-viewer.component.html',
  styleUrls: ['../lib/document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {

  // list of data
  @Input() data: Array<any>;

  // item selected
  itemSelected: any;

  // Displays folders or documents
  displayMode: DisplayMode;

  folderId = 'N° CCC-VVV';
  docType = 'Pièce d\'identité';


  constructor() { }

  ngOnInit() {
    // Displaying mode
    if (this.itemSelected) {
      this.displayMode = DisplayMode.document;
    } else {
      this.displayMode = DisplayMode.folder;
    }

  }

  navigationClick() {
    this.displayMode = this.displayMode === DisplayMode.document ? DisplayMode.folder : DisplayMode.document;
  }

  get isDisplayModeDocument() {
    return this.displayMode === DisplayMode.document;
  }
}
