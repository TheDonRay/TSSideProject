import helperFunction, {ClientData} from '../project2/main.file.js';  

// creating sample data function here as such 
const client : ClientData = { 
    name: 'Fuad Farhan', 
    age: 21, 
    clientEmail: "fuadfarhan2005@gmail.com", 
    clientStatus: false
}; 

const RecieveClientData = async (client : ClientData) => { 
    // set up try and catch case here as such 
    try { 
        if (!client) { 
            throw new Error('No client data given'); 
        } 
        console.log('Client data recieved');  
        console.log('Checking client data....loading....'); 
        //call external function here as such 
        const callHelperAnalyzer = await helperFunction(client); 
        if (!callHelperAnalyzer) { 
            throw new Error('Error calling external function'); 
        }  
        console.log('Success', callHelperAnalyzer); 
    } catch (error) { 
        console.error('Error calling function and recieving clientData', error); 
    }
};  

// invoke the function here 
RecieveClientData(client); 


