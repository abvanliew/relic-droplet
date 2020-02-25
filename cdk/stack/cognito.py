from aws_cdk import (
  core,
  aws_cognito as cognito
)

class UserPool(core.Construct):
  def __init__(
    self, 
    scope: core.Construct, 
    id: str, 
    name: str,
    **kwargs
  ):
    super().__init__(scope, id, **kwargs)

    self.pool = cognito.UserPool(
      self, "Pool",
      user_pool_name = name,
      sign_in_type = cognito.SignInType.USERNAME,
      username_alias_attributes = [ cognito.UserPoolAttribute.EMAIL ],
      auto_verified_attributes = [ cognito.UserPoolAttribute.EMAIL ]
    ) 