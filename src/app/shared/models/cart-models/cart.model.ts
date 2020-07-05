import { Car } from './car/car.model';
import { Order } from './order/order.model';
import { Customer } from './customer/customer.model';
import { Payment } from './payments/payments.model';
import { SalesManager } from './salesManager/salesManager.model';
import { Totals } from './totals/totals.model';
import { CartStatus } from '../../ship/interfaces/shared.interfaces';

export class Cart {
    constructor(
      public car: Car,
      public confirmedOrderItems: Order[],
      public created: string,
      public currency: string,
      public customer: Customer,
      public id: string,
      public modified: string,
      public modifiedBy: string,
      public number: string,
      public offeredOrderItems: Order[],
      public payments: Payment[],
      public salesManager: SalesManager,
      public status: CartStatus,
      public totals: Totals
    ) { }

    static adapt(item: any): Cart {
      return new Cart(
        item.car,
        item.confirmedOrderItems,
        item.created,
        item.currency,
        item.customer,
        item.id,
        item.modified,
        item.modifiedBy,
        item.number,
        item.offeredOrderItems,
        item.payments,
        item.salesManager,
        item.status,
        item.totals
      );
    }
  }
