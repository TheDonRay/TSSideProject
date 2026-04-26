// // lets say we have this object here which can have any type. 

// // so a interface you may see here as such 
// interface Recorder { 
//     name: string, 
//     age: number, 
// }; 

// const data : Recorder = { name: 'ray', age: 21}; 

// console.log(data);  

// // Function Parameter Type annotations here as such 
// //example functions here 
// function greeting(name: string){ 
//     console.log('Hello, ' + name.toUpperCase() + '!'); 
// }; 

// // so now if we were to invoke this function here as such 
// greeting('ray');  

// // you can have return type Annotations here as such too 
// function NumValue() : number { 
//     return 21; 
// } 

// // another notation that  you can have is such 
// const exampleFunction = () : number => { 
//     return 3; 
// } 

// function call here as such 

// Functions with return promises as such  
// async function AnotherExampleAsync() : Promise<number> { 
//     return 21+32; 
// }; 

// const result = await AnotherExampleAsync();
// console.log(result); 

//Understanding Object Type 

function exampleFunction(pt : {x: number, y: string}) { 
    console.log('The value of the X key is', pt.x); 
    console.log('The value of the Y key is', pt.y); 
}; 

// invoke this function with values 
exampleFunction({x: 21, y: 'Ray'});  

// now when it comes to object properties some values may actually be optional. To represent this we can simply apply the ? mark symbol.  
function ObjectOptional(dataContent: {content: string, data?: string, isValid: boolean}) { 
    // handle some logic here as such  
    try { 
        if (dataContent.content === 'valid') { 
            return true; 
        } else { 
            console.log('content is not true'); 
        }
    } catch (error) { 
        console.log(error); 
        return false; 
    }
}; 

// As you can see here the data is valid here where we can all three fields which is fine 
ObjectOptional({content: 'valid', data: 'Secret Data', isValid: true}); 
// we can also have the function call as this as well, as you can see both are okay so it doesn't matter 
ObjectOptional({content: 'valid', isValid: false});  


// Type Aliasing: 
type Data = { 
    validData: string
}; 

const newData : Data = {validData: 'Top Secret'}; 

console.log(newData); 