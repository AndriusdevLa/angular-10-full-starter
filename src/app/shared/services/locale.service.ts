import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  static LOCALE = 'locale';

  constructor(
    private translateService: TranslateService
  ) { }


  getLocale() {
    if (typeof window !== 'undefined') {
      let locale = localStorage.getItem(LocaleService.LOCALE);
      // Set default if not exists in LS
      if (!locale) {
        locale = environment.defaultLocale;
        this.setLocale(locale);
      }


      return locale;
    }
  }

  setLocale(val: string) {
    moment.locale(val);
    this.translateService.use(val);
    if (typeof window !== 'undefined') {
      return localStorage.setItem(LocaleService.LOCALE, val);
    }
  }
}
