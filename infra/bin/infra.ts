#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { InfraStack } from '../lib/infra-stack';
import { AppStoreStackProps } from '../lib/app-store-stack';

import { AppStoreStack } from '../lib/app-store-stack';
const app = new cdk.App();

let appStoreProps: AppStoreStackProps;
appStoreProps={
  project:""
}

new InfraStack(app, 'InfraStack', {
});

new AppStoreStack(app,"AppStoreStack",appStoreProps);