import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './shared/services/locale.service';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService, private localeService: LocaleService,
    private router: Router){
      if(typeof window !== 'undefined'){
        const language = localStorage.getItem('locale');
        if(language !== null && language !== undefined && language !== 'null'){
          this.translateService.setDefaultLang(language);
          this.localeService.setLocale(language);
         } else {
          this.translateService.setDefaultLang(environment.defaultLocale);
          this.localeService.setLocale(environment.defaultLocale);
         }
  
         this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            gtag('config', 'XXXXXX', //Set your google analytics here XXXXXX
              {
                'page_path': event.urlAfterRedirects
              }
            );
          }
        })
        } else {
          this.translateService.setDefaultLang(environment.defaultLocale);
          this.localeService.setLocale(environment.defaultLocale);
        }
  }
}
