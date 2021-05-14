function capitalize(input) {  
    var CapitalizeWords = input[0].toUpperCase();  
    for (var i = 1; i <= input.length - 1; i++) {  
        let currentCharacter,  
            previousCharacter = input[i - 1];  
        if (previousCharacter && previousCharacter == ' ') {  
            currentCharacter = input[i].toUpperCase();  
        } else {  
            currentCharacter = input[i];  
        }  
        CapitalizeWords = CapitalizeWords + currentCharacter;  
    }  
    return CapitalizeWords;  
} 
capitalize("this is the first letter")