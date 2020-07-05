
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppBrowserModule } from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
  if (typeof window !== 'undefined') {
 //   window.console.log = function() {};
 //   window.console.warn = function() {};
  //  window.console.error = function() {};
  }
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppBrowserModule)
  .catch(err => console.error(err));
});
