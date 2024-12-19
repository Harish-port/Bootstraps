function capitalizeWords(sentence) {
  if (!sentence) return ""; // Handle empty strings
  return sentence
    .split(" ") // Split the sentence into words
    .map(word => word[0]?.toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words back into a sentence
}

capitalizeWords("this is the first letter");

console.log(capitalizeWords("this is the first letter"));
