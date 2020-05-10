import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DisplayMode } from '../../enum';
import { IFolder, IFile } from '../../class';

@Component({
  selector: 'lib-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() displayMode: DisplayMode;
  @Input() data: Array<IFolder>;

  @Output() itemSelectHandler = new EventEmitter();
  @Output() displayItem = new EventEmitter();

  private folderActif: IFolder;


  // Toogle configuration
  navigationButtonToogleValues = [ '<i class="fas fa-arrow-alt-circle-left"></i> Liste des dossiers',
                                   'Dossier actif <i class="fas fa-arrow-alt-circle-right"></i>'];
  filterInputToogleValues = ['Rechercher un dossier...', 'Rechercher un document...'];

  documentList = ['Carte d\'identité - Recto', 'Carte d\'identité - Verso', 'formulaire - 1'];

  constructor() { }

  ngOnInit() {
    console.log('data', this.data);
  }

  navigationClick() {
    this.displayMode = this.displayMode === DisplayMode.document ? DisplayMode.folder : DisplayMode.document;
  }

  get isDisplayModeDocument() {
    return this.displayMode === DisplayMode.document;
  }

  get selectedFolderFiles() : Array<IFile> {
    if (this.folderActif) {
      return this.data.find(f => f.id === this.folderActif.id).files;
    }
    return [];
  }

  folderSelected(folder) {
    this.folderActif = folder;
    this.itemSelectHandler.emit(folder);
    this.navigationClick();
  }

  docSelected(doc) {

  }
}
