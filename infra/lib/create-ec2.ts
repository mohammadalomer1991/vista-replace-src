import { Construct } from "constructs";
import * as ec2 from 'aws-cdk-lib/aws-ec2'
interface NewEc2Instance{
    vpc:ec2.Vpc
}
class NewEc2 extends  Construct{
    public readonly new_ec2:ec2.Instance
    constructor(scope:Construct,id:string,props:NewEc2Instance){
        super(scope,id)
        this.new_ec2= new ec2.Instance(this,"new_ec2",{
            machineImage:ec2.MachineImage.latestAmazonLinux2(),
            vpc:props.vpc,
            instanceType: new ec2.InstanceType('t2.micro'),
        })
    }
}