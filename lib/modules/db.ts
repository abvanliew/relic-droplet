import * as cdk from '@aws-cdk/core';
import * as db from "@aws-cdk/aws-dynamodb";

export interface DynamicTableProps {
  tables: string,
}

export class DynamicDatabase extends cdk.Construct {
  constructor( 
    scope: cdk.Construct, 
    id: string,
    props: DynamicTableProps, 
  ) { 
    super( scope, id );

    // new db.Table( this, id, {
    // } );
  }
}
