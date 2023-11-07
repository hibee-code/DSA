// Big O notation = O(2n) the for loop isnt nested.O(n)

const shoutOut = n => {
    for(let i = 0; i < n; i++){
        console.log("what up teliy")
    }
    for(let i = 0; i < n; i++){
        console.log("hey teliy tech")
    }
}
shoutOut(5);


//big O notation is = O(5); => O(1)

const shout2 = n => {
    for(let i = 0; i < 5; i++){
        console.log("hellooo")
    }
}
shout2();

//Big O notation = O(n*n);

const shoutOutPairNum = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i] + ' ' + arr[j])
    }
}
}
shoutOutPairNum(["noodle","Bread", "Rice"]);


//Big O notation = O(n*m)
const shoutOutPairDiff = (arr, arr2) =>{
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr2.length; j++){
            console.log(arr[i] + " " + arr2[j]);
        }
    }
}
shoutOutPairDiff(["bread", "Rice", "Yam"], ["Butter", "Beans", "Mayonaise", "Water"]);

