export default class Model {
    constructor(
        public id: string,
        public modified: string,
        public modifiedBy: string,
      ) { }
  
      static adapt(item: any): Model {
        return new Model(
            item.id,
            item.modified,
            item.modifiedBy
        );
      }
}