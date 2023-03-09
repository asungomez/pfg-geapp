export type AmplifyDependentResourcesAttributes = {
  api: {
    AdminQueries: {
      ApiId: 'string';
      ApiName: 'string';
      RootUrl: 'string';
    };
  };
  auth: {
    pfggeapp: {
      AppClientID: 'string';
      AppClientIDWeb: 'string';
      GoogleWebClient: 'string';
      HostedUIDomain: 'string';
      IdentityPoolId: 'string';
      IdentityPoolName: 'string';
      OAuthMetadata: 'string';
      UserPoolArn: 'string';
      UserPoolId: 'string';
      UserPoolName: 'string';
    };
    userPoolGroups: {
      AdminGroupRole: 'string';
      EditorGroupRole: 'string';
    };
  };
  function: {
    AdminQueries7a677cc0: {
      Arn: 'string';
      LambdaExecutionRole: 'string';
      LambdaExecutionRoleArn: 'string';
      Name: 'string';
      Region: 'string';
    };
  };
};
