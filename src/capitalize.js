// Description: Create a function that accepts a string of words, the function would then capitalize the first letter of each word. empty string should return empty.

// Input: 'i am joshua'

// Output : I Am Joshua

const sentence =
	"hello there, i am dinmarc paredes and i need you to capitalize each word's first letter in order to become the best programmer in the world."

export const capitalizeFunc = (sentence) => {
	// Code here
	const stringArr = sentence.split(' ')
	const result = stringArr.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1)
	})
	return result.join(' ')
}

console.log(capitalizeFunc(sentence))
