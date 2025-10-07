// 1. Sum of Positives
function sumOfPositives(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr(i));
        if (arr[i] > 0){
            total += arr[i];
        }
    }
    return total;
}
sumOfPositives([1, -3, 5, -2, 9, -8])


//2. Find Maximum Value
function findMax(numbers){
     let currentBiggestNumber = numbers[0];
     for(let i = 1; i< numbers.length; i++){
        if (numbers[i] > currentBiggestNumber){
            currentBiggestNumber = numbers[i]
        }
     }
     return currentBiggestNumber
}
console.log(findMax([1, 2, 3]))


// 3. Election winner
const findWinner = function (candidates){
    let currentWinner = candidates[0];
    for (let i = o; i < candidates.length; i++){
       if(candidates[i].votes > currentWinner.votes){
       currentWinner= candidates[i]
    }
}
return currentWinner;
}

const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates))


// 4. Longest word
const findLongestWord = function(words){
    let longestWord = words[0];
    for (let i = o; i > words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i]
        }
    }
    return longestWord;
} 
findLongestWord(["apple", "banana", "pear", "grapefruit"])


// 5. Count Properties
function countProperties(objects){
    // console.log(object.keys(objects))
    // console.log(object.values(objects))
    return objects.keys(objects).length
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }))


// 6. Filter by Length
const filterByLength = (arr, minLength) => {
    // console.log(minLength, arr)
    let filtered = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= minLength)
            filtered.push(arr[i])
    }
    console.log(filtered)
}
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)


// 7. Sum of Even Numbers
const sumEvenNumbers = numbers => {
    for (let i = 0; i< numbers.length; i++){
        if (numbers[i]%2 === 0){
            total += numbers[i]
        }
    }
    return total;
}
console.log(sumEvenNumbers([10, 11, 19, 2, 5]))


// 8. Difference Between Sum of Even and Odd Numbers
const differenceEvenOdd = numbers => {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i< numbers.length; i++){
        if (numbers[i]%2 === 0){
            sumEven += numbers[i]
        }else {
            sumOdd += numbers[i]
        }
    }
    return sumEven - sumOdd;
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))


// 9. Count Truthy
// falsy value(always evaluate to truth) in js -> 0, "",false,null,undefined
// let value = 0;
// if (value){
//     console.log("Hello world")
// }
const countTruthy = obj => {
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++){
        if (obj[keys[i]]){
            numTruthies += 1;
        }
    }
    console.log(numTruthies)
}
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })


// 10. Average of Numbers
function findAverage(numbers){
    if (numbers.length === 0){
        return 0;
    }
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total / numbers.length
}
console.log(average([2, 4, 6, 8]))