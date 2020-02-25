from aws_cdk import core
from stack.site import StaticPublicSite
from stack.table import GlobalTable
from stack.cognito import UserPool

class DropletStack(core.Stack):
  def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
    super().__init__(scope, id, **kwargs)

    self.www = StaticPublicSite( self, "Website", "www-relic-dev", "html", "index.html", "404.html" )
    self.userPool = UserPool( self, "Users", "relic-users" )

    self.tableSkills = GlobalTable( self, "SkillsTable", "relic-skills", "id", sort = "sort" )