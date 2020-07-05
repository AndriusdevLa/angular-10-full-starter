
export class SalesManager {
    constructor(
      public email: string,
      public id: string,
      public modified: string,
      public modifiedBy: string,
      public name: string,
      public phone: string
    ) { }

    static adapt(item: any): SalesManager {
      return new SalesManager(
        item.email,
        item.id,
        item.modified,
        item.modifiedBy,
        item.name,
        item.phone
      );
    }

  }

