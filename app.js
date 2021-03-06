// Write your code here
function sum(a, b) { //eslint-disable-line
    let summation=[];
    let sum1=a+b;
    summation[0]=sum1;
    summation[1]='The sum of '+a+' and '+b+' is '+ sum1+'.';
    console.log(summation);
return summation;
}



// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
// @@ -31,53 +34,83 @@ and the second element is a string that EXACTLY follows this example and uses th
// Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

function multiply(a, b) { //eslint-disable-line
    let multiplication=[];
    let multi=a*b;
    multiplication[0]=multi;
    multiplication[1]='The product of '+a+' and '+b+' is '+multi+ '.';
    console.log(multiplication);
return multiplication;
}


// Here is the test for multiply(); uncomment it to run it
 testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Write a function called sumAndMultiply() that takes in three numbers as separate arguments and
 returns an array where the first element is the sum of those three numbers, 
 the second element is the product of those three numbers,  and the third and fourth elements are strings 
 that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.
To do addition, use your sum() function, and to do multiplication, use your multiply() function
 that you've already created. You're going to have to be resourceful to figure out how to do this. 
 However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
let sumwithmultipy=[];
let theSum=sum(a,b)[0];
let total=sum(theSum,c)[0];
let multi1=multiply(a,b)[0];
let multi2=multiply(multi1,c)[0];
sumwithmultipy[0]=total;
sumwithmultipy[1]=multi2;
sumwithmultipy[2]=a+' and '+b+' and '+c+' sum to '+total +'.';
sumwithmultipy[3]='The product of '+a+' and '+b+' and '+c+' is '+multi2+'.';
console.log(sumwithmultipy);
return sumwithmultipy;
}
// Here is the test for sumAndMultiply(); uncomment it to run it
 testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument 
and then returns an array where the first element is the sum of the numbers in the array, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."



IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/
// Test this function by hand in the console to get it working, 



// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
    let addition=[];
    let firstSum=sum((sumArr[0]),(sumArr[1]))[0];
    let finalSum=sum((firstSum),(sumArr[2]))[0];
    addition[0]=finalSum;
    let x=sumArr[0];
    let y=sumArr[1];
    let z=sumArr[2];
    addition[1]=x+','+y+','+z+' was passed in as an array of numbers, and '+ finalSum+' is their sum.';
    console.log(addition);
return addition;
}

// Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!
/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/
// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
}
// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...
// Don't forget to create a new branch for your work on the next question, if you attempt it.
/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:
"The numbers 1,2,3,4,5 have a product of 120."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.
This function should be dynamic, accepting an array of any length.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/
// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line
function multiplyAnyArray(dynamicArray) { //eslint-disable-line
}
// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.