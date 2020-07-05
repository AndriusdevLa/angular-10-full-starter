export class Totals {
    constructor(
      public coreCharge: number,
      public discount: number,
      public itemsPrice: number,
      public left: number,
      public paid: number,
      public total: number,
      public totalWithoutDiscount: number
    ) { }

    static adapt(item: any): Totals {
      return new Totals(
        item.coreCharge,
        item.discount,
        item.itemsPrice,
        item.left,
        item.paid,
        item.total,
        item.totalWithoutDiscount
      );
    }

  }

