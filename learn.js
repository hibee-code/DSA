// Big O notation = O(2n) the for loop isnt nested.O(n)

const shoutOut = n => {
    for(let i = 0; i < n; i++){
        console.log("what up teliy")
    }
    for(let i = 0; i < n; i++){
        //console.log("hey teliy tech")
    }
}
//shoutOut(5);


//big O notation is = O(5); => O(1)

const shout2 = n => {
    for(let i = 0; i < 5; i++){
        //console.log("hellooo")
    }
}
shout2();

//Big O notation = O(n*n);

const shoutOutPairNum = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            //console.log(arr[i] + ' ' + arr[j])
    }
}
}
shoutOutPairNum(["noodle","Bread", "Rice"]);


//Big O notation = O(n*m)
const shoutOutPairDiff = (arr, arr2) =>{
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr2.length; j++){
            //console.log(arr[i] + " " + arr2[j]);
        }
    }
}
shoutOutPairDiff(["bread", "Rice", "Yam"], ["Butter", "Beans", "Mayonaise", "Water"]);



const fruit = ['Apple','Banana', 'pineapple', 'Water_melon']

for (let i = 0; i<fruit.length;i++){
    //console.log(fruit[i].split('').reverse().join(''));
}


const fruit1 = ['Apple','Banana', 'pineapple', 'Water_melon'];
function fruitNameReverse (fruit1) {
    let end_array = [];
    // let reverse = []
    for (let i = 0; i < fruit1.length;i++){
        reverse = fruit1[i].split('').reverse().join('');
        end_array.push(reverse)
    }
    return end_array;
}
console.log(fruitNameReverse (fruit1));


//reverse string 


function reverseWord (str) {
    const arr = str.split("").reverse().join("");
  
    return arr;

}
//console.log(reverseWord("woman"))

//second way


function reverseWord (strl) {
    
    for(let i = 0; i < strl.length; i++){
    
       const arr = strl.split("").reverse().join("");
        return arr;

    }
    
}
//console.log(reverseWord("woman"))


//third method

function rev (str) {
    return str.split('').reduce((output, char) => {
        output = char + output;
        
        return output;
    }, "");
}
rev("Adunni");


//Palindrome function

const palWord = str => {
    str = str.toLowerCase();

    const reversePal = str.split('').reverse().join('');

    if (str === reversePal){
        return true;
    }else {
        return false;
    }
}
//console.log(palWord("Madam"))

//second method

function palindrome(str) {
    str = str.toLowerCase();
  
    return str === str.split('').reverse().join('');
  }
const ans = palindrome("madam"); 
//console.log(ans)

//ReverseInt

function reverseInt (num) {
   let numStr = num.toString().split('').reverse().join('');
    numStr = parseInt(numStr);

    if(num < 0){
       return numStr * -1
    }
    return numStr;
}
console.log(reverseInt(658));

//max character in a string

// const maxChar = (str) => {
//     let charCountObj = {};
//     let maxChar = '';
//     let maxC  = 0;

//     for(i = 0; i < str.length; i++){
//         const char = str[i];

//         if(charCountObj > maxC) {
//             charCountObj[char] = charCountObj[char] + 1 || 1;
//             maxChar = char;
//             maxC = charCountObj[char];

//         }
//     }
//     return maxChar;
// }
// maxChar();


// swapping variable without using temporary variable
let num1 = 10;
let num2 = 20;

[num1,num2] = [num2,num1]
//console.log(num1,num2);
 const fizzBuzz = (num) => {
    for (i = 0; i < num; i++){
        if (i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz")
        }else if (i % 5 === 0){
            console.log("Buzz")
        }else if( i % 3 === 0){
            console.log("Fizz")
        }else {
            console.log("not among")
        }
    }
 }
 //fizzBuzz(30)

 const capitalWord = (str) => {
    const arrOfWord = str.split(' ');
    let arrCase = [];

    for(i = 0; i < arrOfWord.length;i++){
        const word = arrOfWord[i];
        arrCase.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return arrCase.join(' ');
 }
 console.log(capitalWord("i'm a boy"));

 //Chunk Algorithm

//  const chunk = (arr, size) => {
//     let res = [];

//     for(i = 0; i < arr.length; i++){
//         const item = arr[i];
//         const lastIt = res[res.length -1];

//         if(!lastIt || lastIt.length === size){
//             res.push([item]);
//         }else {
//             lastIt.push(item);
//         }
//     }
//     return res;
//  }
//  const res2 = chunk([3,4,55,6,7,91,22],3);
//  console.log(res2)


const chunkArr = (arr,size) => {
    let res = [];

    for(i = 0; i < arr.length; i++){
        const items = arr[i];
        const last = re[res.length-1];

        if(!last || last.length === size){
            res.push([items]);
        }else {
            last.push(items);
        }
    }
    return res;
}
//chunkArr(arr,size);

///Anagram algorithm

const anagramWord = (strA,strB) => {
//Sanitizing the input spring
    strA = strA.toLowerCase().replace(/[\W_]+/g,"");
    strB = strB.toLowerCase().replace(/[\W_]+/g,"");

    const sortedStrA = strA.split("").sort().join('');
    console.log(strA);
    const sortedStrB = strB.split("").sort().join('');
    console.log(strB);

    return sortedStrA === sortedStrB;
    
}
const answer = anagramWord("Earth","heArt");
console.log(answer)

///CeaserCipher

const ceaserCipher = (strg,shift) => {
    const alphaArr = "abcdefghijklmnopqrstuvwxyz".split('');
    let result = "";
     for(i = 0; i < strg.length; i++){
        const char = strg[i];
        indx = alphaArr.indexOf(char);

        if(indx === -1){
            result += char;
            continue;
        }
     }
     const encodIndx = (indx + shift) % 26;
     result += alphaArr[encodIndx];

     return result;
}
const ans1 = ceaserCipher('efgh',)
console.log(ans1)





 //JS REVISION
const str1 ='game'
const str2 = 'bank'

console.log(`${str1.length} ${str2.length} ${str1} ${str2}`);

const piecesFruit = (fruit) => {
    return fruit * 5;
}

const fruitProcess = (apples, oranges) => {

    const cutApple = piecesFruit(apples);
    const cutOrange = piecesFruit(oranges);
    const juice = `juice with ${cutApple} apples with ${cutOrange} oranges will give a sumptuous fruit juice`;
    return juice;
}
let resp = fruitProcess(4,5);
//console.log(resp);





const avgScore = (a,b,c) => (a + b + c) / 3;
console.log(avgScore(4,5,6));


const scoreDolphin = (84,95,60);
const scoreKoalas = (25,10,15);

const checkWinner = (avgDolphin, avgKaolas) => {
    if (avgDolphin >= 2 * avgKaolas){
        console.log("Dolphin win the game");
    }else if (avgKaolas >= 2 * avgDolphin){
        console.log("Kaolas win the game");
    }else {
        console.log("no one win the game");
    }
}
checkWinner(scoreDolphin, scoreKoalas);

const james = {
    firstName: 'james',
    lastName: 'rodrigo',
    birthYear: 1997,
    job: 'softare developer',
    hasId: true,  

    ageCal: function(){
        console.log(this)
        return 2031 - this.birthYear;
    }
}
console.log(james.ageCal());

const year = [1991,1997,2003,2000]
const age = [];

for (i = 0; i < year.length; i++){
    //console.log(year[i])
    //const newAge = 2037 - year[i];
    age.push(2037-year[i])
}
//console.log(age)

for(i = year.length -1; i >= 0; i--){
    //console.log(year[i])
}

let dice = Math.trunc(Math.random() * 6) + 1

while(dice !== 6){
    //console.log(`u rolled dice ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
}

///Array method

//*** Slice()

const vowel = ["a","b","c","d","f"]
// console.log(vowel.slice(1))
// console.log(vowel.slice(-2))
// console.log(vowel)

const vowel2 = ['e','j','l','q','z','x']

const letter = [...vowel,...vowel2]
// console.log(letter)
// console.log(letter.reverse())
// console.log(letter.join(' '))

//new method

const arr = [24,64,82,88];

arr.forEach(function(num,i){
 //console.log(`${i}`)
})
// console.log(arr.at(-1));
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-2))


///*** forEach method
console.log("--------this is 4 forOf loop-----")
const expenses = [3000, -2000, 5000, 10000, -15000, -500, 65000, 150000, -20000, 200000];

for (const expense of expenses){
    if(expense > 0){
        //console.log(`you deposited ${expense}`)
    }else {
        //console.log(`you have withdraw ${Math.abs(expense)}`)
    }
}

console.log("--------this is 4 forEach loop-----")

expenses.forEach(function(spending, i){
    if(spending > 0){
        //console.log(`movement ${i} you deposited ${spending}`)
    }else {
        //console.log(`movement ${i} you have withdraw ${Math.abs(spending)}`)
    }

}); 

const checkDogs = (dogJulia, dogKate) => {
dogJuliaCorrect = [...dogJulia];
dogJuliaCorrect.splice(0,1);
dogJuliaCorrect.splice(-2);
const dog = [...dogJuliaCorrect,...dogKate];

dog.forEach(function(dog,i){
    if(dog >= 3){
        //console.log(`Dog number ${i +1} is an adult, and is ${dog} years old`)
    }else {
        //console.log(`Dog number ${i +1} is still a puppy`)
    }
})
}
//checkDogs([3,5,2,12,7],[4,1,15,8,3]);
//checkDogs([7,9,12,4,5],[3,8,5,9,10])

//Data Transformation

//**Map **Filter **reduce

// Map

const movements = [3000, -2000, 5000, 10000, -15000, -500, 65000, 150000, -20000, 200000];

//const euroToUsd = 2.5;

const moveEuroToUsd = movements.map(function(mov) {
    return mov * 2.5;
});
// console.log(movements);
// console.log(moveEuroToUsd)

//Arrow function of map
const movToUsd = movements.map(mov => mov * 3)

const user = "James Abidemi Folorunsho"
const userAbv = user
.toLowerCase()
.split(' ')
.map(name => name[0]).join('')
console.log(userAbv)