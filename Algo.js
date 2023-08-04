function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    let previousChar = ' ';  // Initialize with a space to detect word boundaries

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        lengthCounter++;

        if (char.match(/[a-zA-Z]/)) {  // Check if the character is a letter
            if ('aeiouAEIOU'.includes(char)) {  // Check if the character is a vowel
                vowelCounter++;
            }

            if (char === ' ' && previousChar !== ' ') {
                wordCounter++;
            }
        }

        previousChar = char;
    }

    wordCounter++;  // Count the last word after the point

    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Read the input sentence
const sentence = prompt("Enter a sentence ending with a point: ");

// Call the function to analyze the sentence
analyzeSentence(sentence);
