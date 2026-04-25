// lets say we have this object here which can have any type. 

// so a interface you may see here as such 
interface Recorder { 
    name: string, 
    age: number, 
}; 

const data : Recorder = { name: 'ray', age: 21}; 

console.log(data);  

// Function Parameter Type annotations here as such 
//example functions here 
function greeting(name: string){ 
    console.log('Hello, ' + name.toUpperCase() + '!'); 
}; 

// so now if we were to invoke this function here as such 
greeting('ray');  

// you can have return type Annotations here as such too 
function NumValue() : number { 
    return 21; 
} 

// another notation that  you can have is such 
const exampleFunction = () : number => { 
    return 3; 
}