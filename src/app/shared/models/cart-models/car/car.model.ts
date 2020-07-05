export class Car {
    constructor(
      public brand: string,
      public licensePlate: string,
      public model: string,
      public vin: string,
      public year: string
    ) { }

    static adapt(item: any): Car {
      return new Car(
        item.brand,
        item.licensePlate,
        item.model,
        item.vin,
        item.year
      );
    }

  }

