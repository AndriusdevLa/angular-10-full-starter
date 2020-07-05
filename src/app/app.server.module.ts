import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { BrowserModule, TransferState } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateServerLoader } from './translate-server-loader.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';




export function translateFactory(transferState: TransferState) {
  return new TranslateServerLoader('/assets/i18n','.json', transferState);
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [TransferState]
      }
    }),
    BrowserModule.withServerTransition({ appId: 'ngproject' }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }