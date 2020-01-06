from aws_cdk import (
  core,
  aws_s3 as s3,
  aws_s3_assets as s3_assets,
  aws_s3_deployment as s3_deployment,
  aws_iam as iam,
  aws_dynamodb as dynamodb,
  aws_dynamodb_global as globaldb
)

class DropletStack(core.Stack):
  def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
    super().__init__(scope, id, **kwargs)

    # The code that defines your stack goes here

    self.wwwBucket = s3.Bucket(
      self, "HtmlBucket", 
      access_control = s3.BucketAccessControl.PUBLIC_READ,
      bucket_name = "relic-www-dev",
      website_index_document = "index.html",
      website_error_document = "404.html"
    )

    s3_deployment.BucketDeployment(
      self, "HtmlDeployment",
      destination_bucket = self.wwwBucket,
      sources = [ s3_deployment.Source.asset( "html" ) ]
    )

    self.publicReadStatement = iam.PolicyStatement()
    self.publicReadStatement.add_actions( "s3:GetObject" )
    self.publicReadStatement.add_resources( "%s/*" % self.wwwBucket.bucket_arn )
    self.publicReadStatement.add_principals( iam.AnyPrincipal() )

    self.wwwBucket.add_to_resource_policy( self.publicReadStatement )

    core.CfnOutput( 
      self, "S3Url",
      value = self.wwwBucket.bucket_website_url 
    )

    dynamodb.Table(
      self, "TableTwo",
      table_name = "apat-skill-type",
      partition_key = dynamodb.Attribute(
        name = "id",
        type = dynamodb.AttributeType.STRING
      ),
      sort_key = dynamodb.Attribute(
        name = "sort",
        type = dynamodb.AttributeType.STRING
      ),
      stream = dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
      billing_mode = dynamodb.BillingMode.PAY_PER_REQUEST
    )

    globaldb.GlobalTable(
      self, "TableOne", 
      regions = [
        "us-east-1",
        "us-west-1"
      ],
      table_name = "apat-skill", 
      partition_key = dynamodb.Attribute( 
        name = "id", 
        type = dynamodb.AttributeType.STRING 
      ),
      sort_key = dynamodb.Attribute(
        name = "sort",
        type = dynamodb.AttributeType.STRING
      ),
      billing_mode = dynamodb.BillingMode.PAY_PER_REQUEST,
      env = core.Environment( region = "us-east-1" )
    )