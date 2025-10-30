//create VPC 

import { Construct } from "constructs";
import * as ec2 from 'aws-cdk-lib/aws-ec2';

interface NewVPCProps {
    cidr:string;

}
export class NewVPC extends Construct{
    public readonly vpc:ec2.Vpc
    constructor(scope:Construct, id:string, props:NewVPCProps){
        super(scope,id)
    

    this.vpc=new ec2.Vpc(this,"dev-vpc",{
        ipAddresses:ec2.IpAddresses.cidr(props.cidr)
    })
    }
}