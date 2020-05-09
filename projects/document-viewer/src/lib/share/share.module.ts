import { NgModule } from '@angular/core';
import { IconDisplayerDirective } from '../directives/icon-displayer.directive';
import { ToogleButtonDirective } from '../directives/toogle-button.directive';
// import { AsideComponent } from '../components/aside/aside.component';

@NgModule({
  declarations: [IconDisplayerDirective, ToogleButtonDirective],
 imports: [],
  exports: [IconDisplayerDirective, ToogleButtonDirective]
})
export class ShareModule { }
