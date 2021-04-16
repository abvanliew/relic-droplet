const AWS = require( 'aws-sdk' );
const S3  = new AWS.S3();

exports.handler = async (event) => {
    let statusCode = 200;
    let returnBody = JSON.stringify( 'Success!' );
    console.log( event );
    try {
        let jsonData = {
            UserPoolId: event.UserPoolId,
            ClientId: event.ClientId,
        };
        
        let params = {
            Body: JSON.stringify( jsonData ),
            Bucket: event.BucketName,
            Key: "data.json"
        };
        
        await S3.putObject( params ).promise();
    } catch (e) {
        statusCode = 500;
        returnBody = e;
        console.log( "Error" );
        console.log( e.message );
    }

    const response = {
        statusCode: statusCode,
        body: returnBody,
    };
    
    return response;
};
