import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { LocaleService } from '../services/locale.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiErrors } from '../interfaces/error.interface';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private static BASE_URL = environment.apiUrl;

  readonly HEADER_AUTHORIZATION = 'Authorization';
  readonly HEADER_ACCEPT = 'Accept';
  readonly HEADER_CONTENT_TYPE = 'Content-Type';
  readonly ACCEPT_LANGUAGE = 'Accept-Language';

  constructor(
    private authService: AuthService,
    private localeService: LocaleService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // if you want to skip headers, just place { skip } in your http request
    if (req.headers.get('skip')) {
      return next.handle(req);
    }

    // We want to skip header checking for our local assets

    if (req.url.startsWith('./assets') || req.url.startsWith('/assets')) {
      return next.handle(req);
    }

    req = req.clone({
      url: this._prefixUrl(req.url)
    });

    // If something went wrong just comment code below

    req = req.clone({
      headers: req.headers.set(this.HEADER_ACCEPT, 'application/json')
    });

    req = req.clone({
      headers: req.headers.set(this.HEADER_CONTENT_TYPE, 'application/json')
    });

    req = req.clone({
      headers: req.headers.set(this.ACCEPT_LANGUAGE, this.localeService.getLocale())
    });

    // Set token if exists
    const token = this.authService.getToken();
    if (token) {
      req = req.clone({
        headers: req.headers.set(this.HEADER_AUTHORIZATION, `Bearer ${token}`)
      });
    }

    // Comment till here

    // Error handling

    return next.handle(req).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        if (httpErrorResponse.error !== undefined) {
          const customError: ApiErrors = {
            name: httpErrorResponse.error.name,
            message: httpErrorResponse.error.message,
            errors: httpErrorResponse.error.errors
          };
          return throwError(customError);
        } else {
          throw httpErrorResponse;
        }
      })
    );
  }

  private _prefixUrl(path: string): string {
    console.log(path);
    if (path.indexOf('/') === 0) {
      path = path.substr(1, path.length - 1);
    }

    return `${InterceptorService.BASE_URL}/${path}`;
  }
}
