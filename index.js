// // addition
function add(num1, num2) {
  return num1 + num2;
}
let sum = add(10, 25);
console.log(sum);

// // subtraction
function subtraction(num1, num2) {
  return num2 - num1;
}
console.log(subtraction(20, 55));

// // multiplication
function product(num1, num2) {
  return num1 * num2;
}
console.log(product(45, 20));

// // convert minutes to seconds
function convert(min) {
  return min * 60;
}
console.log(convert(5));

// // perimeter of a rectangle
function perimeter(l1, l2) {
  return (l1 + l2) * 2;
}
console.log(perimeter(10, 5));

// // check negative
function isNegative(a) {
  if (a < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isNegative(5));

// const isNegative2 = function(a){
if (a < 0) {
  return true;
} else {
  return false;
}

console.log(isNegative(-5));
console.log(isNegative(25));

// // can i drive
function canDrive(name, age) {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive`;
  }
}
console.log(canDrive("Janet", 21));
console.log(canDrive("Ian", 15));

// function canDrive2(name, age){
if (age >= 18) {
  return name + "is old enough to drive";
} else {
  return name + "is not old enough to drive";
}

console.log(canDrive("Kioko", 21));
console.log(canDrive("Stacy", 15));

// // largest number
function findLargest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(findLargest(5, 9, 3));
console.log(findLargest(10, 10, 10));
console.log(findLargest(-1, -5, -3));

// // BMI calculator
function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi <= 18.5) {
    return `your BMI is ${bmi} -underweight`;
  } else if (bmi > 18.5 && bmi <= 24.9) {
    return `your BMI is ${bmi} -normal weight`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `your BMI is ${bmi} -overweight`;
  } else {
    `your BMI is ${bmi} - obese`;
  }
}
console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));

// // greeting based on time
function greetUser(name, time) {
  if (time >= 5 && time <= 11) {
    console.log(` Good morning ${name}`);
  } else if (time >= 12 && time <= 17) {
    console.log(`Good afternoon${name}`);
  } else if (time >= 18 && time <= 21) {
    console.log(`Good evening${name}`);
  } else if (time >= 22 || time <= 4) {
    console.log(`Good night ${name}`);
  }
}
greetUser("Joan", 5);
greetUser("Joan", 15);
greetUser("Joan", 19);
greetUser("Joan", 3);

// // FizzBuzz
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return String(number);
  }
}
console.log(fizzBuzzCheck(6));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(30));

// // perimeter2
function perimeter(shape, value) {
  if (shape === "s") {
    const number_of_sides = 4;
    return value * 4;
  } else if (shape === "c") {
    const PI = 3.142;
    return PI * (value * 2);
  }
}
console.log(perimeter("s", 4));
console.log(perimeter("c", 7));

// // sum of even numbers
function sumOfEvenNumbers(n) {
  // for(initialization; Condition; update)
  let result = 0;
  for (let i = 1; i >= n; i = i + 1)
    if (i % 2 == 0) {
      result += i;
    }
}
return result;
console.log(sumOfEvenNumbers(13));

// // multiply by itself
function powerUp(num, times) {
  let result = 1;
  for (let i = 1; i <= times; i++) {
    result = result * num;
  }
  console.log(result);
}
powerUp(5, 3);

// // factorial calculator
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i = i + 1) {
    result = result * n;
  }
  console.log(result);
}
factorial(5);
factorial(10);
factorial(2);

// // multiple sum  let result =1 for multiplication as 0 is insignificant'
function sumMultiples(num, divisor) {
  // while(condition){
  //     body
  // }
  let i = 1;
  let result = 0;
  while (i <= num) {
    if (i % divisor == 0) result += i;
    i += 1;
  }
  console.log(result);
}
sumMultiples(50, 4);

// // sum of digits 'let result =o for addition as 0 is insignificant'
function sumDigits(num) {
  let result = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    result = result + lastDigit;
    num = Math.trunc(num / 10);
  }
  console.log(result);
}
sumDigits(581);
sumDigits(6543);

// determine if a number is a prime number
function isPrime(num) {
  let result = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      result++;
      console.log(i);
    }
  }
  return result;
}
console.log(isPrime(1000000));

function isPrime2(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count += 1;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}

for (let i = 1; i <= 1_000; i++)
  if (isPrime2(i)) {
    console.log(isPrime2(100));
  }

isPrime2(10);
