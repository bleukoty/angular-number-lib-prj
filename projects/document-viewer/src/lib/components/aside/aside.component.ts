import { Component, OnInit, Input } from '@angular/core';
import { DisplayMode } from '../../enum';

@Component({
  selector: 'lib-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() displayMode: DisplayMode;

  navigationButtonToogleValues = [ '<i class="fas fa-arrow-alt-circle-left"></i> Liste des dossiers',
                                   'Dossier actif <i class="fas fa-arrow-alt-circle-right"></i>'];

  filterInputToogleValues = ['Rechercher un dossier...', 'Rechercher un document...'];

  documentList = ['Carte d\'identité - Recto', 'Carte d\'identité - Verso', 'formulaire - 1'];

  constructor() { }

  ngOnInit() {
  }

  navigationClick() {
    this.displayMode = this.displayMode === DisplayMode.document ? DisplayMode.folder : DisplayMode.document;
  }

  get isDisplayModeDocument() {
    return this.displayMode === DisplayMode.document;
  }
}
