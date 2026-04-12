interface ClientData { 
    name: string, 
    age: number, 
    clientEmail: string, 
    clientStatus: boolean
}; 

const analyzeClientData = (clientInformation : ClientData) => { 
     // try and catch case here 
    try { 
        if (!clientInformation) { 
            throw new Error('Error no valid client information or valid fields are not filled out correctly'); 
        } 
        if (clientInformation.age < 18) { 
            console.log('Client is too young to register');  
        } else { 
            console.log('Client age approved'); 
        } 
        if (clientInformation.clientStatus === false) { 
            console.log('Client is not with us anymore'); 
        }  
    } catch (error) { 
        throw new Error('No Client data recieved'); 
    }
}; 

export default analyzeClientData; 