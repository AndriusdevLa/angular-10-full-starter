import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateBrowserLoader } from './translate-browser-loader.service';

export function exportTranslateStaticLoader(http: HttpClient, transferState: TransferState) {
  return new TranslateBrowserLoader('/assets/i18n/', '.json?v5', transferState, http);
}

@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({ appId: 'ngproject' }),
    BrowserTransferStateModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: exportTranslateStaticLoader,
        deps: [HttpClient, TransferState]
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule { }
