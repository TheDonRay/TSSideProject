//create an interface for a user 
interface User  {
    name: string, 
    age: number, 
    username: string
}; 

interface UserPassword { 
    password: string
}; 

interface UserLevel { 
    level: number
}; 



class UserProfile {
    private user: User;
    protected password: UserPassword; 
    public level: UserLevel; 
    
    
    constructor (user: User, password: UserPassword, level: UserLevel) { 
        this.user = user; 
        this.password = password; 
        this.level = level; 
    };  

    // create this function to get users  username as such 
    public getUsername = () => { 
        return `User's Username is ${this.user.username}`; 
    }; 

    public getUserLevel = () => { 
        return `User Level is the following: ${this.level.level}`; 
    };  

    public getUserPassword = () => { 
        return `Sorry User password is confidential cannot show`; 
    }
}; 

