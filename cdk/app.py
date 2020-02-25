#!/usr/bin/env python3
from aws_cdk import core
from stack.droplet import DropletStack

envDev = core.Environment( region = "us-east-1" ) #, account = "771300234085" )

app = core.App()

stack = DropletStack( app, "relic-dev" , env = envDev )

app.synth()