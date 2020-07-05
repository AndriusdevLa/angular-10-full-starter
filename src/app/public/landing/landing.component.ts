import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/models/cart-models/cart.service'
import { first } from 'rxjs/operators';
import { Cart } from 'src/app/shared/models/cart-models/cart.model';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from 'src/app/shared/services/locale.service';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';
import { ISelectOption } from 'src/app/shared/ship/interfaces/shared.interfaces';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public cart: Cart;
  public languages: ISelectOption[] = [
    {value: 'en', label: 'English'},
    {value: 'fr', label: 'France'},
    {value: 'lt', label: 'Lithuanian'},
  ]
  public selectedLanguage: FormControl = new FormControl('en');
  constructor(private cartService: CartService, private translateService: TranslateService, private localeService: LocaleService) { }

  ngOnInit(): void {
    this.getCart();
  }

  private getCart() {
    this.cartService.getOrder('notplacingIdhereBecauseItsJsonMock').pipe(first()).subscribe((data: Cart) => {
      this.cart = data;
    },
      (error) => {
        console.log(error)
      },
      () => {
        console.log('Success', this.cart)
      })
  }


  languageChange(event : MatSelectChange) {
    console.log(event);
    this.translateService.setDefaultLang(event.value);
    this.localeService.setLocale(event.value);
    if (typeof window !== 'undefined') {
      const language = localStorage.getItem('locale');
      if (language !== null && language !== undefined && language !== 'null') {
        this.translateService.setDefaultLang(language);
        this.localeService.setLocale(language);
        this.selectedLanguage.setValue(language);
      } else {
        this.translateService.setDefaultLang(environment.defaultLocale);
        this.localeService.setLocale(environment.defaultLocale);
        this.selectedLanguage.setValue(environment.defaultLocale);
      }
    }
  }

}
