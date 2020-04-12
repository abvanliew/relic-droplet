from aws_cdk import (
  core,
  aws_apigatewayv2 as api2
)

class Api(core.Construct):
  def __init__(
    self, 
    scope: core.Construct, 
    id: str, 
    **kwargs
  ):
    super().__init__(scope, id, **kwargs)

    api2.CfnApi(
      self, "API",
      protocol_type = "HTTP"
    )