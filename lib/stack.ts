import * as cdk from '@aws-cdk/core';
import { StaticWebsite, StaticWebsiteProps } from './modules/static-site';
import { UserAuth } from './modules/cognito';
import { CustomCfn } from "./modules/custom-cfn";

export interface RelicStackProps extends cdk.StackProps {
  sourceFolder: string,
  label: string,
}

export class RelicStack extends cdk.Stack {
  constructor( scope: cdk.Construct, id: string, props: RelicStackProps ) {
    super( scope, id, props );

    new StaticWebsite( this, "RelicFrontEnd", {
      bucketName: `www-relic-${props.label}`,
      sourcePath: props.sourceFolder,
    } );

    new UserAuth( this, "RelicUsers", {
      name: `relic-users-${props.label}`,
    } );

    // new CustomCfn( this, "JsonToS3", {
    //   lambdaSource: "lambda/customCfn/s3Json/index.js"
    // });
  }
}