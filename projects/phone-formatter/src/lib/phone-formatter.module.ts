import { NgModule } from '@angular/core';
import { PhoneFormatterComponent } from './phone-formatter.component';
import { PhoneFormatterDirective } from './phone-formatter.directive';



@NgModule({
  declarations: [PhoneFormatterComponent, PhoneFormatterDirective],
  imports: [
  ],
  exports: [PhoneFormatterComponent, PhoneFormatterDirective]
})
export class PhoneFormatterModule { }
