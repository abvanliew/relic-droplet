#!/usr/bin/env node
// import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { RelicStack } from '../lib/stack';

const app = new cdk.App();

const stack = new RelicStack( app, 'RelicDeployment', {
  stackName: "relic-stack-demo",
  label: "demo",
  sourceFolder: "frontend/build",
} );