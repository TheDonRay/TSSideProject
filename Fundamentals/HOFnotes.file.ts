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
const mainFunction = (execute: () => userDetails) : any => { 
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


// example of TS format of the function parameter / argument:  

interface classDetails { 
    className?: string | number, 
    major: string
} 

const functionFormat = (studentClassDetails : string ) : classDetails => { 
    // retrieve students class data here  
    if (!studentClassDetails) { 
        throw new Error('No student class Details passed'); 
    }; 
    let classData = {  
        className: `${studentClassDetails} Physics`, 
        major: 'Computer Science',
    };  
    console.log(classData); 
    return classData;  
};  

// invoke the function here  
functionFormat('NewStudent'); 
