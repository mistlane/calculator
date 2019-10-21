add = function(a, b) {
    
    
    return a + b

}

subtract = function(a, b) {
    return a-b
}

multiply = function(a, b) {
    return a*b
}

divide = function(a, b) {
    return a/b
}

operate = function(operator, a,b) {

    if(operator == "add") {
        return add(a,b)
        
    }

    else if(operator == "subtract") {
        return subtract(a,b)
    }

    else if(operator =="multiply") {
        return multiply(a,b)

    }

    else if(operator =="divide") {
        return divide(a,b)
    }
}





digitalizer = function(data) {
    // Creates an element in the screen with class "numbers" (not necessarily needed)
    const container = document.querySelector('#screen');
    const content = document.createElement('h1');
    content.classList.add('number');



    // Defines the numbers and adds them to the element made prior
  
    content.textContent = data;
    container.appendChild(content);
    cache(data)
    
 
}


clearNumbers = function() {
    const myNode = document.getElementById("screen");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }



backspace = function() {
    var select = document.getElementById('screen');
    select.removeChild(select.lastChild);
}

// Has every value
valuesArray = []

// Has the unique character stored
breaksArray = []

// Has the position of the break character stored
breaktimeArray = []

numbersArray = []


// Saves the values from digitalizer and inputs them into the operator-function
cache = function(value) {
    
    // I need to identify all breaks in the array and combine the numbers between breaks
    // Then the new values will be operated on based on the operator hierarchy
    valuesArray.push(value)
   
  
    
 
    if(Number.isInteger(parseInt(value)) != true) {
        breaksArray.push(valuesArray[valuesArray.length-1])
        breaktimeArray.push(valuesArray.length)
        console.table(breaksArray)
        console.table(breaktimeArray)
        
    }

    
    // Now I have the quality of the operator and its position saved. 
    // Next step is to take all numbers from 1 to breaktimeArray.length which are not included as a value in breaktimeArray
    

 

    console.log(breaktimeArray.length, "tässä breaktimeArray.length")
    


    
    // They are the keys for values in valuesArray. 
    // After having gotten the keys the keys' values have to be combined in to a string, based on if the keys are in a row (i.e. 345)
    // After the value is string it can be made back to integer. 

    //Then is time to compare the operators in breaksArray
    // * beats -, / beats + and + and - are equal, and so on
    // After they and their breaktimeArray-position are compared, the values can be shared for the operations
    // Caution has to be had in case of 14 * 524 / 42 for example



    
}   

numberPositions = function() {
    i = 1
    while(i<=valuesArray.length) {
       
        if(breaktimeArray.includes(i) == false) {
            numbersArray.push(i)
        }
        i=i+1
        console.log("alla numbersArray")
        console.log(numbersArray)
        console.log("yllä numbersArray")
    }

}