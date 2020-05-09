import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DocumentViewerComponent } from './document-viewer.component';
import { ToogleButtonDirective } from './directives/toogle-button.directive';
import { ShareModule } from './share/share.module';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [DocumentViewerComponent, AsideComponent, HeaderComponent],
  exports: [DocumentViewerComponent]
})
export class DocumentViewerModule { }
