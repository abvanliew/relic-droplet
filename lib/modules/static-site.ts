import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deploy from '@aws-cdk/aws-s3-deployment';
import * as cf from '@aws-cdk/aws-cloudfront';

export interface StaticWebsiteProps {
  bucketName: string, 
  sourcePath: string, 
  indexDocument?: string,
  errorDocument?: string,
}

export class StaticWebsite extends cdk.Construct {
  private wwwBucket: s3.Bucket;

  constructor( 
    scope: cdk.Construct, 
    id: string,
    props: StaticWebsiteProps
  ) { 
    super( scope, id );

    this.wwwBucket = new s3.Bucket( this, "wwwBucket", {
      bucketName: props.bucketName, 
      websiteIndexDocument: props.indexDocument ? props.indexDocument : "index.html", 
      websiteErrorDocument: props.errorDocument ? props.errorDocument : "error.html", 
    } );

    const oai = new cf.OriginAccessIdentity( this, "OAI" );
    this.wwwBucket.grantRead( oai );

    new s3deploy.BucketDeployment( this, "DeploySource", {
      destinationBucket: this.wwwBucket,
      sources: [ s3deploy.Source.asset( props.sourcePath ) ],
    } );

    const distribution = new cf.CloudFrontWebDistribution( this, "Distribution", {
      originConfigs: [ {
        s3OriginSource: { s3BucketSource: this.wwwBucket, originAccessIdentity: oai }, 
        behaviors: [ { isDefaultBehavior: true } ], 
      } ]
    } );

    new cdk.CfnOutput( this, "s3Url", { value: this.wwwBucket.bucketWebsiteUrl } );
  }

  public getS3Arn(): string {
    return this.wwwBucket.bucketArn;
  }

  public getBucketName(): string {
    return this.wwwBucket.bucketName;
  }

  public getRef(): string {
    return this.wwwBucket.toString();
  }
}

// const bucketPolicy = new iam.PolicyStatement();
// bucketPolicy.addActions( "s3:GetBucket*" );
// bucketPolicy.addActions( "s3:GetObject*" );
// bucketPolicy.addActions( "s3:List*" );
// bucketPolicy.addResources( wwwBucket.bucketArn );
// bucketPolicy.addResources( `${wwwBucket.bucketArn}/*` );
// bucketPolicy.addCanonicalUserPrincipal( oai.cloudFrontOriginAccessIdentityS3CanonicalUserId );

// wwwBucket.addToResourcePolicy( bucketPolicy );