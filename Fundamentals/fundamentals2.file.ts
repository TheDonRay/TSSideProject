// part 2 fundamentals pt 2 

//understanding interfaces extended 

interface Username { 
    user?: string, 
    isValid: boolean
}; 

interface GamerAccount extends Username { 
    pass: string | number, 
    isActive: boolean
}; 

// initializing data here 
const newAccount : Username = {user: 'TheDevRay', isValid: true}; 
console.log('New Account Created');  

//optional account creation here as such 
const invalidAccountDetails : Username = { isValid: false}; // notice i can have this because user key is optional type 
console.log('Account invalid no user defined'); 

const newGamerAccount : GamerAccount = {user: 'TheDevRay', isValid: true, pass: 1234, isActive: true}; // Common mistake that you can realize is that since GamerAccout extends Username you need to add the key value pairs from the Username Interface as well 
console.log('Gamer account created');  

// if i tried that here it will  work  
const newGamer : GamerAccount = {isValid: true, pass: '2234', isActive: true}; // since the GamerAccount interface extends the Username interface you can also not have the user key value pair since its an optional property. 

// now we can call values from any one of the interfaces for GamerAccount 
const AccountDetails = { 
    Username: newGamerAccount.user, 
    Password: newGamerAccount.pass, 
    ValidUser: newGamerAccount.isValid, 
    ActiveAccount: newGamerAccount.isActive, 
}; 

console.log(AccountDetails); 
 

// Remember in typescript and Javascript: }Claude responded: This actually won't work!This actually won't work! The ? for optional properties only works inside type or interface definitions, not in a plain object. 
// in js it wont work either, so the optional property typing is for types and interfaces in Typescript. 