import { NgModule } from '@angular/core';
import { DocumentViewerComponent } from './document-viewer.component';
import { ToogleButtonDirective } from './toogle-button.directive';



@NgModule({
  declarations: [DocumentViewerComponent, ToogleButtonDirective],
  imports: [
  ],
  exports: [DocumentViewerComponent]
})
export class DocumentViewerModule { }
