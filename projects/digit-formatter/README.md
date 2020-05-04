# DigitFormatter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.7.

# Description

This library helps you to format all your numbers per thousand with a custom space character. By default the space character is ' '

# Demo

stackblitz : https://stackblitz.com/edit/format-number

# Usage 

### app.module.ts
...
    import { DigitFormatterModule} from '@sir_koty/digit-formatter';
...
    @NgModule({
    ...
    imports: [
        ...
        DigitFormatterModule,
        ...
    ],
    providers: [{ provide: FormErrorDisplayerService, useValue: service}],
    bootstrap: [AppComponent]
    })
    export class AppModule { }


### app.component.html
    ...
    <input type="text" libDigitFormatter spacingCaracter='.' />
    ...

