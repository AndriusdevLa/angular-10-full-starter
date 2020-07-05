import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Adapter } from './adapter';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  protected http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }

   protected hydrateFullResponseItem(data: any, hydrator: any) {
    if (data !== null) {
      return (new hydrator()).hydrate(data);
    } else {
      return undefined;
    }
  }

  protected hydrateItem(data: any, hydrator: any): any {
    return (new hydrator()).hydrate(data.body);
  }

  protected hydrateDataItem(data: any, hydrator: any): any {
    return (new hydrator()).hydrate(data.data);
  }

  protected hydrateCollection(data: any, hydrator: any): any {
    return data.map(item => (new hydrator()).hydrate(item));
  }

  protected hydrateCollectionData(data: any, hydrator: any): any {
    return data.data.map(item => (new hydrator()).hydrate(item));
  }

  protected hydrateCollectionWithMeta(data: any, hydrator: any): any {
    return {
      list: data.data.map(item => (new hydrator()).hydrate(item)),
      meta: data.meta
    };
  }

  protected convertParams(params: object): HttpParams {
    let httpParams = new HttpParams();

    Object.keys(params).forEach((key: string) => {
      httpParams = httpParams.append(key, params[key] && params[key].toString());
    });

    return httpParams;
  }
}
