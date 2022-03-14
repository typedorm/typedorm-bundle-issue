import 'reflect-metadata';
import {Attribute, AUTO_GENERATE_ATTRIBUTE_STRATEGY, AutoGenerateAttribute, Entity, Table} from '@typedorm/common';
import {createConnection, getEntityManager} from '@typedorm/core';

export const myGlobalTable = new Table({
  name: 'dynamodb-sample-table',
  partitionKey: 'PK',
  sortKey: 'SK',
});

@Entity({
  name: 'product',
  primaryKey: {
    // {{}} is the special syntax that TypeDORM understands and will automatecally replace the placeholder within it with actual value at run time
    partitionKey: 'PRODUCT#{{id}}',
    sortKey: 'PRODUCT',
  },
})
export class Product {
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id!: string;

  @Attribute()
  status!: string;
}

createConnection({
  table: myGlobalTable,
  entities: [Product],
});

export const handler = async (event: any) => {
  console.log('Event', event);

  const entityManager = getEntityManager();

  await entityManager.findOne(Product, {id: '1234'})

  return {
    statusCode: 200,
    body: 'works',
  };
};
