import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  folderId = 'N° CCC-VVV';
  docType = 'Pièce d\'identité';
  constructor() { }

  ngOnInit() {
  }

}
