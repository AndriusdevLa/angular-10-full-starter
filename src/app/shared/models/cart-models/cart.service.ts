import { Injectable } from '@angular/core';
import { ProviderService } from '../../ship/provider.service';
import { Observable } from 'rxjs';
import { Cart } from './cart.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService extends ProviderService {
  private cartEndpoint: string = "/public/orders" // Full api url comes from environment variable so its more like www.api.com/public/orders in the end.

  getOrder(hash: string): Observable<Cart> {
    // if you want to use real data from api use this :
    /*
   return this.http.get<Cart>( `${this.cartEndpoint}/${hash}`).pipe(
      map((data: any) => Cart.adapt(data)),
     // map((data: any[]) => data.map(item => this.adapter.adapt(item))), // <-- If whole response is array of objects use this line
      );
    */

    // For now we are using json mocked data, so we place headers skip to skip interceptors 

    return this.http.get<Cart>( `/assets/mock-data/order.json`, {headers: {skip:"true"}}).pipe(
      map((data: any) => Cart.adapt(data)), // <-- If whole response is one object
     // map((data: any[]) => data.map(item => this.adapter.adapt(item))), // <-- If whole response is array of objects use this line
      );
    }

}
