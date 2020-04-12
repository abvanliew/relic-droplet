import * as cdk from '@aws-cdk/core';
import * as cognito from "@aws-cdk/aws-cognito";

export interface UserAuthProps {
  name: string,
}

export class UserAuth extends cdk.Construct {
  constructor( 
    scope: cdk.Construct, 
    id: string,
    props: UserAuthProps, 
  ) { 
    super( scope, id );

    const pool = new cognito.UserPool( this, "Pool", {
      userPoolName: props.name,
      requiredAttributes: { email: true },
      signInAliases: { username: true, email: true },
    } );

    const client = pool.addClient( "Client", { userPoolClientName: props.name } );

    new cdk.CfnOutput( this, "pool id", { value: pool.userPoolId } );
    new cdk.CfnOutput( this, "client id", { value: client.userPoolClientId } )
  }
}