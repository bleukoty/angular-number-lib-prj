import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'lib-document-viewer',
  templateUrl: '../lib/document-viewer.component.html',
  styleUrls: ['../lib/document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  navigationButtonText = 'Liste des dossiers';

  constructor() { }

  ngOnInit() {
  }

  navigationClick() {
    console.log("navigation c")
    this.navigationButtonText = this.navigationButtonText === 'Liste des dossiers' ? 'Dossier Actif' : 'Liste des dossiers';
  }
}
