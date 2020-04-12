'use strict';

const
  AWS = require( "aws-sdk" ),
  S3  = new AWS.S3();

exports.handler = ( event, context, callback ) => {
  console.log( `FUNCTION STARTED: ${new Date()}` );

  S3.putObject( {
    Bucket: event.bucketName,
    Key: event.filePath,
    Body: event.fileContent,
  } )
    .promise()
    .then( () => console.log( 'UPLOAD SUCCESS' ) )
    .then( () => callback( null, 'MISSION SUCCESS' ) )
    .catch( e => {
      console.error( 'ERROR', e );
      callback( e );
    } );
};