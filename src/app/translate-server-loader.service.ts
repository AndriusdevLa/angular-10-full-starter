import { Observable } from "rxjs";
import { TranslateLoader } from '@ngx-translate/core';

declare var require: any;
import { join } from 'path';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

const fs = require('fs');

export class TranslateServerLoader implements TranslateLoader {


    constructor(private prefix: string = 'i18n',
        private suffix: string = '.json',
        private transferState: TransferState) {
    }

    public getTranslation(lang: string): Observable<any> {

        return Observable.create(observer => {
            const assets_folder = join(process.cwd(), 'dist', 'ngproject', 'browser', this.prefix);
            console.log('TEST PATH - ', assets_folder);

            const jsonData = JSON.parse(fs.readFileSync(`${assets_folder}/${lang}${this.suffix}`, 'utf8'));

            // Here we save the translations in the transfer-state
            const key: StateKey<number> = makeStateKey<number>('transfer-translate-' + lang);
            this.transferState.set(key, jsonData);

            observer.next(jsonData);
            observer.complete();
        });
    }
}