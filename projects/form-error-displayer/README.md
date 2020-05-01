# FormErrorDisplayer

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Description

This library allows you to display input error messages in an angular form, in a configurable way

## Installation 

Run `npm i @sir_koty/form-error-displayer`

## Usage

#### ==> app.module.ts

@import { FormErrorDisplayerModule, FormErrorDisplayerService } from '@sir_koty/form-error-displayer';
// Create your custom error message 
const errorList = [ {key: 'required_name' , message: 'name field is required' }, // key = error_key + formControlName (in reactive form)
                    {key: 'pattern_name' , message: 'the name field does not match to the pattern' }
]
const myCustService = new FormErrorDisplayerService(errorList);
@NgModule({
  ...
  imports: [
    ...
    FormErrorDisplayerModule,
    ...
  ],
  providers: [
      ...,
      { provider: FormErrorDisplayerService, useValue: myCustService }
  ]
  bootstrap: [AppComponent]
})
export class AppModule { }

####  ==> app.component.html

" div [formGroup]="myForm"
"   input id="xxx" libFormErrorDisplayer formControlName='name'  type='text'
" div

#### ==> app.component.ts

myForm: FormGroup;
constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
        name: ['', [ Validators.required, Validators.pattern(/\d/)] ]
    })
}
