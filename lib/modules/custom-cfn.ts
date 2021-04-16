import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";
import * as iam from '@aws-cdk/aws-iam';
import * as cf from "@aws-cdk/aws-cloudformation"

export interface CustomCfnProps {
  typeName: string,
  lambdaSource: string,
  lambdaHandler: string,
  lambdaRuntime: lambda.Runtime,
  customProperties: Map<string, any>
  lambdaPolicies?: iam.PolicyStatement[]
}

export class CustomCfn extends cdk.Construct {
  private customResource: cf.CustomResource;

  constructor( 
    scope: cdk.Construct, 
    id: string,
    props: CustomCfnProps, 
  ) { 
    super( scope, id );

    const cfnFunction = new lambda.Function( this, "LambdaFunction", { 
      code: new lambda.AssetCode( props.lambdaSource ), 
      handler: props.lambdaHandler, 
      runtime: props.lambdaRuntime, 
    } );

    if ( props.lambdaPolicies ) {
      for ( let policy of props.lambdaPolicies )
      {
        cfnFunction.addToRolePolicy( policy );
      }
    }

    this.customResource = new cf.CustomResource( this, "CustomResource", {
      resourceType: `Custom::${props.typeName}`,
      provider: cf.CustomResourceProvider.fromLambda( cfnFunction ),
      properties: props.customProperties
    } );
  }
}
