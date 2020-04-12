from aws_cdk import (
  core,
  aws_dynamodb as dynamodb,
)

class ReplicatedTable(core.Construct):
  def __init__(
    self, 
    scope: core.Construct, 
    id: str, 
    name: str,
    key: str,
    sort: str = None,
    replication: list = [ "us-west-1" ],
    **kwargs
  ):
    super().__init__(scope, id, **kwargs)

    primaryKey = dynamodb.Attribute( name = key, type = dynamodb.AttributeType.STRING )
    sortKey = None if sort is None else dynamodb.Attribute(  name = sort, type = dynamodb.AttributeType.STRING )

    self.table = dynamodb.Table(
      self, "Table", 
      table_name = name, 
      partition_key = primaryKey,
      sort_key = sortKey,
      replication_regions = replication,
      billing_mode = dynamodb.BillingMode.PAY_PER_REQUEST
    )
