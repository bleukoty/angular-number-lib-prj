import { NgModule } from '@angular/core';
import { IconDisplayerDirective } from '../directives/icon-displayer.directive';
import { ToogleButtonDirective } from '../directives/toogle-button.directive';

@NgModule({
  declarations: [IconDisplayerDirective, ToogleButtonDirective],
  imports: [], 
  exports: [IconDisplayerDirective, ToogleButtonDirective]
})
export class ShareModule { }
