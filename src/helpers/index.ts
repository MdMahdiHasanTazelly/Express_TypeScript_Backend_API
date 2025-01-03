import crypto from 'crypto';
const SECRET = 'express-ts-backend-secret';


//generates 128 cryptogrphic random bytes
//the bytes are converted into base 64 encoded string
//base 64 encoding ----> representation of binary data into textual format
export const random = ()=> (crypto.randomBytes(128).toString('base64'));



//createHmac function creates Hash Message Authentication Code
//use hsa256 hashing algorithm
//joins password and salt seperated by /
//update(SECRET) function adds a secret to that hashed password
//digest() function creates buffer of that hashed password
//buffer --> hex representation of binary data [each pair of hex represents 1 byte(8 bit) of binary data]
export const authentication = (salt: string, password: string)=>{
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest();
}


