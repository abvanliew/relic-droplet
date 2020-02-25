from aws_cdk import (
  core,
  aws_s3 as s3,
  aws_s3_deployment as s3_deployment,
  aws_iam as iam
)

class StaticPublicSite(core.Construct):
  def __init__(
    self, 
    scope: core.Construct, 
    id: str, 
    bucketName: str,
    sourcePath: str,
    indexFile: str,
    errorFile: str,
    **kwargs
  ):
    super().__init__(scope, id, **kwargs)

    self.wwwBucket = s3.Bucket(
      self, "wwwBucket", 
      access_control = s3.BucketAccessControl.PUBLIC_READ,
      bucket_name = bucketName,
      website_index_document = indexFile,
      website_error_document = errorFile
    )

    s3_deployment.BucketDeployment(
      self, "HtmlDeployment",
      destination_bucket = self.wwwBucket,
      sources = [ s3_deployment.Source.asset( sourcePath ) ]
    )

    publicReadStatement = iam.PolicyStatement()
    publicReadStatement.add_actions( "s3:GetObject" )
    publicReadStatement.add_resources( "%s/*" % self.wwwBucket.bucket_arn )
    publicReadStatement.add_principals( iam.AnyPrincipal() )

    self.wwwBucket.add_to_resource_policy( publicReadStatement )

    core.CfnOutput( 
      self, "S3Url",
      value = self.wwwBucket.bucket_website_url 
    )