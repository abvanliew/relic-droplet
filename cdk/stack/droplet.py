from aws_cdk import core
from stack.lib.site import *
from stack.lib.table import *
from stack.lib.cognito import *
from stack.lib.api import *

class DropletStack(core.Stack):
  def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
    super().__init__(scope, id, **kwargs)

  def addSite(
    self, 
    id: str, 
    bucketName: str, 
    sourcePath: str, 
    indexPage: str = "index.html", 
    errorPage:str = "404.html",
  ):
    return StaticPublicSite( self, id, bucketName, sourcePath, indexPage, errorPage )

  def addUserPool( 
    self, 
    id: str, 
    poolName: str 
  ):
    return UserPool( self, id, poolName )

  def addTable(
    self,
    id: str,
    name: str,
    key: str,
    sort: str = None,
    replication: list = [],
  ):
    return ReplicatedTable( self, id, name, key, sort = sort, replication = replication )

  def addApi( self, id: str ):
    return Api( self, id )