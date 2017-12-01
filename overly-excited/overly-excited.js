// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
    Write a `for` loop that iterates over the array argument and
    outputs the words.
    */
    // console.log(sentence.join(" "));
    // console.log(sentence);
    
    //First try using array
    for (let i = 0, newWordArray = []; i < theWordArray.length; i++) {
        newWordArray.push(theWordArray[i]);
        console.log(newWordArray.join(" "));

    }
    
    //Second try using string concatenation
    // for (let i = 0, string = ""; i < theWordArray.length; i++) {
    //     string = string + theWordArray[i] + " ";
        // If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.
    //    if (i != 0 && i % 3 == 0) {
    //     newWordArray.push('!');
    // }
    //     console.log(string);
    // }

    

}

// Invoke the function and pass in the array
addExcitement(sentence);