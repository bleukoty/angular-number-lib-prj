# @sir_koty/phone-formatter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Description

This library exposes a directive (libPhoneFormatter) that format the text entered like this 12345678 => 12 34 56 78

## Installation 

Run `npm i @sir_koty/phone-formatter`

## Usage
==> app.module.ts

@import { PhoneFormatterModule } from '@sir_koty/phone-formatter';
@NgModule({
  ...
  imports: [
    ...
    PhoneFormatterModule,
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

==> app.component.html

<input libPhoneFormatter type="text"/>