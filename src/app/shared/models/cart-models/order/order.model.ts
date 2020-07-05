import { OrderItemType, InoviceStatus, PaymentStatus, OrderStatus } from 'src/app/shared/ship/interfaces/shared.interfaces';

export interface offeredOrder {
    confirmed: boolean,
    coreCharge: number,
    coreChargeApplied: boolean,
    estimatedDelivery: {
        from: string,
        fromInDays: number,
        to: string,
        toInDays: number
    },
    id: string,
    orderItemType: OrderItemType,
    price: number,
    refNumber: string,
    terms: string,
    totalPrice: number
}
export class Order {
    constructor(
        public hasFewSellingPrices: boolean,
        public hasSubItems: boolean,
        public description: string,
        public id: string,
        public invoiceStatus: InoviceStatus,
        public modified: string,
        public modifiedBy: string,
        public name: string,
        public paymentStatus: PaymentStatus,
        public refNumber: string,
        public sellingPrice: offeredOrder,
        public sellingPrices: offeredOrder[],
        public status: OrderStatus,
        public subItems: [
          {
            id: string,
            name: string,
            quantity: number
          }
        ],
        public type: OrderItemType,
        public radioListOpened: boolean,
    ) { }

    static adapt(item: any): Order {
        return new Order(
            item.hasFewSellingPrices,
            item.hasSubItems,
            item.description,
            item.id,
            item.invoiceStatus,
            item.modified,
            item.modifiedBy,
            item.name,
            item.paymentStatus,
            item.refNumber,
            item.sellingPrice,
            item.sellingPrices,
            item.status,
            item.subItems,
            item.type,
            item.radioListOpened
        );
    }

}

