import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DocumentViewerComponent } from './document-viewer.component';
import { ToogleButtonDirective } from './directives/toogle-button.directive';
import { ShareModule } from './share/share.module';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayerComponent } from './components/displayer/displayer.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [DocumentViewerComponent, AsideComponent, HeaderComponent, DisplayerComponent],
  exports: [DocumentViewerComponent]
})
export class DocumentViewerModule { }
