import poolData from './pool.json'
// var poolData = require('./pool.json')
console.log( poolData )
var UserPool = new AmazonCognitoIdentity.CognitoUserPool( poolData );