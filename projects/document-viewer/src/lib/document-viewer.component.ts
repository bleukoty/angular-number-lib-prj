import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // encapsulation: ViewEncapsulation.None,
  selector: 'lib-document-viewer',
  templateUrl: '../lib/document-viewer.component.html',
  styleUrls: ['../lib/document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  navigationButtonText = 'Liste des dossiers';
  placeholder = 'Rechercher un document...';

  folderId = 'N° CCC-VVV';
  docType = 'Pièce d\'identité';

  documentList = ['Carte d\'identité - Recto', 'Carte d\'identité - Verso', 'formulaire - 1'];

  iconLeft = true;

  data = [1, 3];


  constructor() { }

  ngOnInit() {
  }

  navigationClick() {
    this.navigationButtonText = this.iconLeft ? 'Dossier Actif' : 'Liste des dossiers';
    this.placeholder = this.iconLeft ? 'Rechercher un document...' : 'Rechercher un dossier...'; 
    this.iconLeft = !this.iconLeft;
  }
}
