const employees = [
    {
        "firstName": "Arabela",
        "lastName": "Fockes",
        "email": "afockes0@wired.com",
        "salary": "$6.18",
        "isEngineer": true,
        "gender": "Female"
    },
    {
        "firstName": "Bryant",
        "lastName": "Marchi",
        "email": "bmarchi1@theatlantic.com",
        "salary": "$8.05",
        "isEngineer": false,
        "gender": "Male"
    },
    {
        "firstName": "Batholomew",
        "lastName": "Eim",
        "email": "beim2@goodreads.com",
        "salary": "$7.26",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Ritchie",
        "lastName": "Ferreira",
        "email": "rferreira3@booking.com",
        "salary": "$4.07",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Kaylyn",
        "lastName": "Ivain",
        "email": "kivain4@gmpg.org",
        "salary": "$5.89",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Wilhelmina",
        "lastName": "Portigall",
        "email": "wportigall5@plala.or.jp",
        "salary": "$2.06",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Rouvin",
        "lastName": "Gillcrist",
        "email": "rgillcrist6@aol.com",
        "salary": "$7.29",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Flemming",
        "lastName": "Scroggins",
        "email": "fscroggins7@msu.edu",
        "salary": "$7.54",
        "isEngineer": false,
        "gender": "Male"
    },
    {
        "firstName": "Sallee",
        "lastName": "Schlagh",
        "email": "sschlagh8@reuters.com",
        "salary": "$2.24",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Roxine",
        "lastName": "Bedo",
        "email": "rbedo9@whitehouse.gov",
        "salary": "$6.47",
        "isEngineer": false,
        "gender": "Female"
    }
]



// 1.Create a function that is receiving a collection of employees and using toString() returns a string with comma-separated full names


function getFullName (arr){

  let result =  arr.map((item)=>{
        return (item.firstName +' '+ item.lastName )
    })

    return result.toString()

}


// console.log(getFullName (employees))


// 2.Create a function that is receiving a collection of employees and using toString() returns a string with comma-separated`email: salary` with the following format

function getEmailSalary (arr){
    let result =  arr.map((item)=>{
        return (item.email +' '+ item.salary)
    })
    return result.toString()

}


// console.log(getEmailSalary (employees))

// 3. Create a custom Array.prototype.myToString it should work similarly to Array.prototype.toString
let num =[1,2,3,undefined]
Array.prototype.myToString = function () {
    let res= ''
    for (i=0;this.length>i;i++){
        res +=  this[i]
        if(i === this.length - 1){
              res +=' '
        }else {
             res +=  ','
        }
    }
    return res
}


console.log(employees.myToString())


// 4. Create a function that is receiving a collection of employees and returns a string containing emails in the following format

function  joinMails (arr){
   let result = arr.map((item)=>item.email).join('//')
    return result
}

console.log(joinMails (employees))

// 5. Create a function that is receiving a collection of employees and returns a string with comma-separated email: salary

function employeesMailSalary(arr){

  return   arr.map((item)=>item.email +' '+ item.salary).join(',')

}


console.log(employeesMailSalary(employees))


// 6.Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join

Array.prototype.myJoin = function (item) {
    let res= ''
    for (i=0;this.length>i;i++){
        res +=  this[i]
        if(i === this.length - 1){
              res +=' '
        }else {
             res +=  item
        }
    }
    return res

}

console.log(employees.myJoin(','))


// 7.Create a function that is receiving an array and returns reversed one using pop()

function reversedByPop (arr){
    let result =[]
    while (arr.length) {
        result.push(arr.pop());
    }
   return result

}
console.log(reversedByPop(employees))



// 8.Create a function that is receiving a sting argument and checks if it is a palindrome using pop()

function palindrome (str){
    let arr = str.split('')
    let result= []
    let newArray = arr.slice()
    for (i=0; i<Math.floor(newArray.length/2);i++){
        result.push(newArray[i]=== arr.pop())
    }

    if(result.every((e)=>e === true)){
        return  true
    }else {
        return  false
    }

}

console.log(palindrome ('aba'),'ttttttttttttttttttttttt')


// 9.Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop

Array.prototype.myPop = function () {



}

employees.myPop()

// 10.Create a function that is receiving a number and returns an array which is containing all even digits. Use push method

let number = 456879;

function  getEvensFromNmb (number){

   let  evenNumber = []
    let arr = number.toString().split('')
   arr.map((item)=>{
        if(Number(item) % 2 === 0){
            evenNumber.push(item)

        }
   })
    return evenNumber
}

console.log(getEvensFromNmb (number))


// 11.Create a function that will receive two collections of employees and adds the items of the second collection to the first collection. Use push method

function pushIntoCollection(arr1,arr2){

    arr2.forEach((item)=>{

        arr1.push(item)
    })

    return arr1
}




let col1 = [{ a: "1" }, { b: "2" }, { c: "3" }];
let col2 = [{ d: "4" }, { e: "5" }, { f: "6" }];
console.log(pushIntoCollection(col1,col2))



// 12.Create a custom Array.prototype.myPush should work similarly to Array.prototype.push


Array.prototype.myPush = function (...item) {
            let arr = this
            item.forEach((item)=>{
                arr[arr.length] = item
            })
    return arr

}
let myPushArr = [{ d: "4" }, { e: "5" }, { f: "6" }]

col1.forEach((item)=> {
    myPushArr.myPush(item)
})

console.log(col1,'good')


// 13.  Create a custom Array.prototype.myShift should work similarly to Array.prototype.shift

Array.prototype.myShift = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    this.length = this.length - 1

        return this[0]
}

let myShiftArr = [{ a: "1" }, { b: "2" }, { c: "3" }];
myShiftArr.myShift()
console.log(myShiftArr)

// 14.  Create a custom Array.prototype.myUnshift should work similarly to Array.prototype.unshift


Array.prototype.myUnshift = function (...arr){
            for(i=0;i<this.length;i++){
                arr[arr.length] = this[i]
            }

        for(i=0;i<arr.length;i++){
            this[i] =arr[i]
        }

            return this
}

let myUnshiftArr = [{ a: "1" }, { b: "2" }, { c: "3" }];

myUnshiftArr.myUnshift("Lemon", "Pineapple")

console.log(myUnshiftArr)


// 15. Using concat compute the union of two arrays and then remove all duplicated items if they exist

function  concatArrRemove (arr1,arr2){
        let result =  [...new Set(arr1.concat(arr2))]

    return result
}

const concatArr1 = ['a', 'b', 'c'];
const concatArr2 = ['d', 'e', 'c'];

console.log(concatArrRemove(concatArr1,concatArr2))

// 16. Create a custom Array.prototype.myConcat should work similarly to Array.prototype.concat


Array.prototype.myConcat = function (arr){

    arr.forEach((item,i)=>{
         this[this.length] = item
    })
    return this
}

const myConcatArr1 = ['a', 'b', 'c'];
const myConcatArr2 = ['d', 'e', 'c'];


console.log(myConcatArr1.myConcat(myConcatArr2))

// 17.Using the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive.


let arr = [1,2,3,6,9,11,11,15];
function makeConsecutive(arr) {

    const lastItem = arr.slice(arr.length-1)[0]

    for (i = 0; i < arr.length; i++) {

        if (arr[i] - arr[i + 1] !== -1 && lastItem !== arr[i] && arr[i] !== arr[i + 1]) {

            arr.splice(i + 1, 0, arr[i]  + 1)
        }
    }
    return arr
}
console.log(makeConsecutive(arr));

// 18 .Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers


const book = [
    'JavaScript: the good parts',
   'Douglas Crockford',
]
console.log(book.toString())
// Сейчас читаю [object Object]


