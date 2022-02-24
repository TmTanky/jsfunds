// Description: Create a function that accepts an array and add each all elements that are greater than the previous elements before it.

// Input: [1, 2, 2, 3, 1, 4, 3, 5]

// Output : 14

const arr = [1, 2, 2, 3, 1, 4, 3, 5];

export const sumArr = (arr) => {
	// Code here
	const result = arr.reduce((accu, curr) => {
		return accu + curr
	}, 0)
	return result;
};

console.log(sumArr(arr));
