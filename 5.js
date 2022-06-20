// Additional assignments for M2-W3-P1

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, 
 for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

function checkArray(){
    let giveMeRandom = [];
    let sum = 0;
  for (i = 0; i < 10; i++){
      
      let rand = Math.floor(Math.random() * 10);
      giveMeRandom.push(rand);
    
     if (giveMeRandom[i] > 5){
         sum += rand;
     }
     }
      console.log(giveMeRandom);
      console.log(sum);
}
checkArray();

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an 
 id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart = [
  
    {
     name: "book",
      price: 10,
      ID: "bk1122",
      quantity: 3,
    },
    {
      name: "pencil",
      price: 2,
      ID: "pe5673",
      quantity: 2,
    },
    {
      name: "notepad",
      price: 20,
      ID: "nt6507",
      quantity: 1,
    },
    
  ];
  
  function totalShop(values){
  let totalPrice = [];
  let toPrice = [];
  let toQty = [];
  let sum = 0;
  let sumQty = 0;
  let sumTotal = 0;
  
  for (i = 0; i < values.length; i++){
                toPrice.push(values[i].price);
                toQty.push(values[i].quantity);
                totalPrice.push(values[i].price * values[i].quantity)
                
               
            sum += values[i].price;
            sumQty += values[i].quantity;
            sumTotal += totalPrice[i];
              }
              console.log("Total Quantity of items in Cart" + " = " + " " + sumQty);
  
      
  console.log("Total Price of items in Cart" + " = " + " " + sumTotal);
  }
  totalShop(shoppingCart);

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and
  the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total 
 number of items in the shoppingCart.
*/

const shoppingCart = [
  
    {
     name: "book",
      price: 10,
      ID: "bk1122",
      quantity: 3,
    },
    {
      name: "pencil",
      price: 2,
      ID: "pe5673",
      quantity: 2,
    },
    {
      name: "notepad",
      price: 20,
      ID: "nt6507",
      quantity: 1,
    },
    
  ];
  
  function addToShoppingCart(values){
  let toQty = [];
  let sumQty = 0;
  shoppingCart.push({name:"camera",price: 40,ID: "ca9874",quantity: 2},);
  console.log(shoppingCart);
  
  
  for (i = 0; i < values.length; i++){
          
                toQty.push(values[i].quantity);
                sumQty += values[i].quantity;
      }
      console.log("Total Quantity of items in Cart" + " = " + " " + sumQty);
  
  }
  addToShoppingCart(shoppingCart);
  
  

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id 
 and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

const shoppingCart = [
  
    {
     name: "book",
      price: 10,
      ID: "bk1122",
      quantity: 3,
    },
    {
      name: "pencil",
      price: 2,
      ID: "pe5673",
      quantity: 2,
    },
    {
      name: "notepad",
      price: 20,
      ID: "nt6507",
      quantity: 1,
    },
    
  ];
  
  function maxShoppingCart(values){
  let arrPrice = [];
  let arrName = [];
  for (i = 0; i < values.length; i++){
      arrPrice.push(values[i].price);
  }
     let max = arrPrice.reduce((prev, current) => {return Math.max(prev, current)});
     
  for (i = 0; i < values.length; i++){
      arrName.push(values[i].name);
   if ( values[i].price == max) {
             console.log("The most expensive item in the Cart" + " = " + " " + values[i].name);
         }
      } 
      
  }
  maxShoppingCart(shoppingCart);
  
  

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id 
 and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const shoppingCart = [
  
    {
     name: "book",
      price: 10,
      ID: "bk1122",
      quantity: 3,
    },
    {
      name: "pencil",
      price: 2,
      ID: "pe5673",
      quantity: 2,
    },
    {
      name: "notepad",
      price: 20,
      ID: "nt6507",
      quantity: 1,
    },
    
  ];
  
  function latestShoppingCart(values){
  
  let lastShoppingCart = shoppingCart.pop();
       console.log(lastShoppingCart);
  }
  latestShoppingCart(shoppingCart);
  
  

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(x){
  let arr = [1, 2]; 
  // arr can be empty or some random numbers can added to prevent error
  let start = false
    while (start == false){
       let i = Math.floor(Math.random() * 9);
          arr.push(i);
       if(arr.slice(arr.length-1)[0]  > x && arr.slice(arr.length-2)[0] > x && arr.slice(arr.length-3)[0] > x ){
           start = true
       }
    }
    console.log(arr);
  } 
  loopUntil(5);

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically
  skips non-numeric entries in the array.
*/

function average(arr){
  let sum = 0;
  let length = arr.length;
  for (i = 0; i < arr.length; i++){
  if (typeof(arr[i]) == "string"){ 
      length = length - 1;
  } 
  else {
    sum += arr[i];
   } 
}   
var arrAverage = sum / length; 
    console.log(arrAverage);
}
average([2, 2, 2, "the", "ae", 6]);

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

function longest(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function(str) {
      if (longest < str.length) {
          longest = str.length;
          word = str;
      }
  });
  return word;
}
console.log(longest("book and schools"));

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and
  returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

function antiSpam(emailContent){

  if(emailContent.search("spam") >= 0 || emailContent.search("scam") >= 0 ){
    console.log("spam");
  } 
  else  {
      console.log("true");
  }
  
}

antiSpam("i am spam");

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

function numOfDaysPassed(dateString){

  var daysPassed = 0;
  var selectDate = new Date(dateString); // convert string to date
  selectDate = selectDate.getTime(); //getTime bring dates in milliseconds
  
  var today = new Date();
  today.setDate(today.getDate()); // getDate brings todays date
  today = today.getTime();
  
  
  var diff = today - selectDate;
  
  daysPassed = Math.floor(diff / (1000*3600*24));
  
  console.log(daysPassed);
      
  }numOfDaysPassed('06/07/2022');

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

 question not understood

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
