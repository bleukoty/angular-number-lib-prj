import { Injectable, Optional, InjectionToken, Inject } from '@angular/core';
import { ErrorObserver } from 'rxjs';

export const SOME_CONST_VALUE = new InjectionToken<Array<ErrorMessage>>('');


@Injectable({providedIn: 'root'})
export class FormErrorDisplayerService {
  errorsList: Array<ErrorMessage>;

  constructor(@Inject(SOME_CONST_VALUE) @Optional() errorsList: Array<ErrorMessage> = []) {
    this.errorsList = errorsList;
  }
  getListOfMessage(keys: Array<string>) {
    const message = [];
    let tempResult: ErrorMessage | undefined;
    keys.forEach(key => {
      tempResult = this.errorsList.find(x => x.key === key);
      if (tempResult) {
        message.push(tempResult.message);
      } else {
        console.error(`la clé "${key}" n'est pas définie dans le fichier des erreurs.`);
      }
    });
    return message;
  }

  setErrorList(errorsList: Array<ErrorMessage>) {
    this.errorsList = errorsList;
  }
}

interface ErrorMessage {
  key: string;
  message: string;
}