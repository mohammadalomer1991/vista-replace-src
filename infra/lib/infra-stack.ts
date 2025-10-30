// lib/infra-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NewVPC } from './create-vpc'; // Now this works!

export class InfraStack extends cdk.Stack {
  public readonly vpc: cdk.aws_ec2.Vpc;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Instantiate your reusable construct
    const myVpc = new NewVPC(this, 'MyVpcConstruct', {
      cidr: '10.0.0.0/16'
    });
    // Expose the vpc property from the construct
    this.vpc = myVpc.vpc;
  }
}