import { PaymentType } from 'src/app/shared/ship/interfaces/shared.interfaces';

export class Payment {
    constructor(
      public createdAt: string,
      public details: string,
      public id: string,
      public type: PaymentType,
    ) { }

    static adapt(item: any): Payment {
      return new Payment(
        item.createdAt,
        item.details,
        item.id,
        item.type,
      );
    }

  }

