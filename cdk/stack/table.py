from aws_cdk import (
  core,
  aws_dynamodb as dynamodb,
  aws_dynamodb_global as globaldb
)

class GlobalTable(core.Construct):
  def __init__(
    self, 
    scope: core.Construct, 
    id: str, 
    name: str,
    key: str,
    sort: str = None,
    primaryRegion: str = "us-east-1",
    otherRegions: list = [ "us-west-1" ],
    **kwargs
  ):
    super().__init__(scope, id, **kwargs)

    sortKey = None if sort is None else dynamodb.Attribute(  name = sort, type = dynamodb.AttributeType.STRING )
    otherRegions.append( primaryRegion )

    self.table = globaldb.GlobalTable(
      self, "GlobalTable", 
      table_name = name, 
      partition_key = dynamodb.Attribute( name = key, type = dynamodb.AttributeType.STRING ),
      sort_key = sortKey,
      env = core.Environment( region = primaryRegion ),
      regions = otherRegions,
      billing_mode = dynamodb.BillingMode.PAY_PER_REQUEST
    )