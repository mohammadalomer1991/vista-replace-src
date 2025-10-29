import { Stack, StackProps, Stage } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface AppStoreStackProps extends StackProps {
	project: string;
}

export class AppStoreStack extends Stack {
	constructor(scope: Construct, id: string, props: AppStoreStackProps) {
		super(scope, id, props);
}
}