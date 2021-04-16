import * as cdk from '@aws-cdk/core';
import { StaticWebsite, StaticWebsiteProps } from './modules/static-site';
import { UserAuth } from './modules/cognito';
import { CustomCfn } from "./modules/custom-cfn";
import * as iam from '@aws-cdk/aws-iam';
import * as lambda from "@aws-cdk/aws-lambda";

export interface RelicStackProps extends cdk.StackProps {
  sourceFolder: string,
  label: string,
}

export class RelicStack extends cdk.Stack {
  constructor( scope: cdk.Construct, id: string, props: RelicStackProps ) {
    super( scope, id, props );

    const site = new StaticWebsite( this, "RelicFrontEnd", {
      bucketName: `www-relic-${props.label}`,
      sourcePath: props.sourceFolder,
    } );

    new UserAuth( this, "RelicUsers", {
      name: `relic-users-${props.label}`,
    } );

    const s3Access = new iam.PolicyStatement( { 
      effect: iam.Effect.ALLOW,
      actions: [ "s3:*" ],
      resources: [ `${site.getS3Arn()}`, `${site.getS3Arn()}/*` ],
    } );

    const configToS3 = new CustomCfn( this, "UserPoolToS3", {
      typeName: "UserPoolToS3",
      lambdaHandler: "index.handler",
      lambdaRuntime: lambda.Runtime.NODEJS_12_X,
      lambdaSource: "lambda/customCfn/s3Json/",
      lambdaPolicies: [ s3Access ],
      customProperties: new Map< string, string >([
        [ "BucketName", `${site.getBucketName()}` ],
        [ "UserPoolId", "CDKPoolTest" ],
        [ "ClientId", "CDKPoolTest" ],
      ])
    });

    configToS3.node.addDependency( site );
  }
}