import * as cdk from '@aws-cdk/core';
import * as lambdaJs from "@aws-cdk/aws-lambda-nodejs";

export interface CustomCfnProps {
  lambdaSource: string,
}

export class CustomCfn extends cdk.Construct {
  constructor( 
    scope: cdk.Construct, 
    id: string,
    props: CustomCfnProps, 
  ) { 
    super( scope, id );

    new lambdaJs.NodejsFunction( this, "LambdaFunction", {
      entry: props.lambdaSource, 
    } )
  }
}
