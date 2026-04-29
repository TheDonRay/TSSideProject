// going HOF ( Higher Order of Functions ) 

// simply is the idea of taking a function as an argument and returning that function 

//Example 1 -> return user account details 

interface userDetails { 
    username: string, 
    pass: string | number, 
    twoFactor? : boolean, 
    isAccountActive: boolean
};

// example 1 function here  
const mainFunction = (execute: () => userDetails) => { 
    // call the execute parameter here as such 
    execute(); 
}

// execute function 
const executeFn = () : any => { 
    // access the interface details here as such  
    const dataObject : userDetails = { 
        username: 'Ray',  
        pass: 'hdhfhdh', 
        twoFactor: true, 
        isAccountActive: true, 
    } 
    // finally return the function here as such 
    const dataResponse = dataObject; 
    console.log(dataResponse); 
}; 

// invoke the mainFunction here 
mainFunction(executeFn);  