export interface ClientData { 
    name: string, 
    age: number, 
    clientEmail: string, 
    clientStatus: boolean
}; 

const analyzeClientData = (clientInformation : ClientData) : string => { 
     // try and catch case here 
    try { 
        if (!clientInformation) { 
            throw new Error('Error no valid client information or valid fields are not filled out correctly'); 
        } 
        if (clientInformation.age < 18) { 
            console.log('Client is too young to register');  
        }
        if (clientInformation.clientStatus === false) { 
            console.log('Client is not with us anymore'); 
        }   
        return "ClientData was successfully checked"; 
    } catch (error) { 
        console.error('No Client data recieved', error);  
        return "sorry no valid data was able to get passed"; 
    }
}; 

export default analyzeClientData; 