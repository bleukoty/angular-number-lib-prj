import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgIf} from '@angular/common';
import { DocumentViewerComponent } from './document-viewer.component';
import { ToogleButtonDirective } from './toogle-button.directive';
import { ShareModule } from './share/share.module';



@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [DocumentViewerComponent, ToogleButtonDirective],
  exports: [DocumentViewerComponent]
})
export class DocumentViewerModule { }
