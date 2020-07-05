

export class Customer {
    constructor(
       public address: string,
       public contactInfo: string,
       public email: string,
       public id: string,
       public modified: string,
       public modifiedBy: string,
       public name: string,
       public phone: string,
    ) { }

    static adapt(item: any): Customer {
      return new Customer(
        item.address,
        item.contactInfo,
        item.email,
        item.id,
        item.modified,
        item.modifiedBy,
        item.name,
        item.phone
      );
    }
  }
