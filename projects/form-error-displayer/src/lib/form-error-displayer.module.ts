import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormErrorDisplayerDirective } from './form-error-displayer.directive';
import { FormErrorDisplayerService } from './form-error-displayer.service';



@NgModule({
  declarations: [FormErrorDisplayerDirective],
  imports: [],
  exports: [FormErrorDisplayerDirective],
})
export class FormErrorDisplayerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormErrorDisplayerModule,
      providers: [FormErrorDisplayerService]
    };
  }
}
