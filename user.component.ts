// Just like the "main" app component (main.ts) we need to import component -
import { Component } from "@angular/core";

// Creating decorator - It is a part of typescript basically allows us to add extra information onto our class or component.
@Component({
    selector : "app-user",
    /*
    // Declaring "templates", "styles" inside the typescript file is not a good practice. Therefore, we are creating a separated HTML file. 
    template : "<h2>Arnab Chakraborty</h2>"
    styles : [
        `
        h2{
            color : blue
        }`
    ]
    */
    templateUrl : './user.component.html',
    styleUrls : ['./user.component.css']
})

// We need to create our class -
export class UserComponent {

    //Properties & Methods : 

    // Properties : // Using typescript : 
    firstName : string = 'Arnab';
    lastName : string = 'Chakraborty';
    // We can use this number in the 'String Interpolation' method. (Number can be used as a string)
    age : number = 22; 
    temp_age : number = 22;
    // Object - 
    address = {
        street : 'Gourbanga road',
        city : 'Kolkata',
        state : 'West Bengal' 
    }
    globalVariable : any;
    foodItems : string[] | undefined; // Undefined array structure.
    membersIdArray: number[] = []; // Assigned initializer in the array.
    mixedArray : any;
    myTuple : [string, number, boolean] | undefined;
 // 

    // Methods : 
    constructor(){
        this.sayHello(); // Invoking a method inside another method using 'this' keyword. 
        console.log('Welcome to Bangalore'); // This message will be displayed in the console.
        this.experiment_with_age();
        this.mixedArray = [0, '1', 'Two', true];
        this.myTuple = ['String', 10, true];
    }

    sayHello(){
        console.log(`Hello ${this.firstName}`); // This function will not run automatically and will not print anything in the console. 
        // To print the value we need to declare the function inside constructor().
    }

    experiment_with_age(){
        this.age += 2;
        console.log(`In 2024, you'll be of ${this.age} years`);
    }

    // String Interpolation with method return value : 
    greeting_with_surname(){
        return this.lastName;
    }
}
