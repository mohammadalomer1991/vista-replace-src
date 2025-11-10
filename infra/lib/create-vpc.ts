import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";

interface NewVPCProps {
  number_of_subnets: number;
}

export class NewVPC extends Construct {
  public readonly my_vpc: ec2.Vpc;

constructor(scope: Construct, id: string, props: NewVPCProps) {
    super(scope, id);

    this.my_vpc = new ec2.Vpc(this, "my_new_vpc", {
    cidr: "10.0.0.0/16",
    maxAzs: props.number_of_subnets,
    natGateways: 1,
    enableDnsHostnames: true,
    enableDnsSupport: true,

    subnetConfiguration: [
        {
        cidrMask: 24,
        name: "public-subnet",
        subnetType: ec2.SubnetType.PUBLIC,
        },
        {
        cidrMask: 24,
        name: "private-subnet",
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
    ],
    });
}
}
