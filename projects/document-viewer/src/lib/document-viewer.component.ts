import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'lib-document-viewer',
  templateUrl: '../lib/document-viewer.component.html',
  styleUrls: ['../lib/document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  navigationButtonText = 'Liste des dossiers';

  folderId = 'N° CCC-VVV';
  docType = 'Pièce d\'identité';

  iconLeft = true;

  data = [1, 3];


  constructor() { }

  ngOnInit() {
  }

  navigationClick() {
    this.navigationButtonText = this.iconLeft ? 'Dossier Actif' : 'Liste des dossiers';
    this.iconLeft = !this.iconLeft;
  }
}
