#!/usr/bin/env python3
from aws_cdk import core
from stack.droplet import DropletStack

envDev = core.Environment( region = "us-east-1" )

app = core.App()

stack = DropletStack( app, "relic-dev" , env = envDev )

website = stack.addSite( "Website", "relic-www-bucket-dev", "html/build/" )

userPool = stack.addUserPool( "userPool", "relic-users" )

table = stack.addTable( "Characters", "relic-chars", "id" )

api = stack.addApi( "NewApi" )

app.synth()