// ===***=== Chapter # 21-25 and Excersice # 1 ===***===

var first = prompt("Enter Your First Name");
var last = prompt("Enter Your Last Name");
var fullName = first + " " + last;
alert("Welcome " + fullName);


// ===***=== Chapter # 21-25 and Excersice # 2 ===***===

var mobile = prompt("Enter Your Favorite Mobile Model");
var length = mobile.length;
document.write("<h2>Chapter # 21-25 and Excersice # 2</h2>");
document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of String: " + length);


// ===***=== Chapter # 21-25 and Excersice # 3 ===***===

var word = "Pakistan";
var no = word.indexOf("n");
document.write("<h2>Chapter # 21-25 and Excersice # 3</h2>");
document.write("String: " + word + "<br>");
document.write("Index of 'n' is: " + no);


// ===***=== Chapter # 21-25 and Excersice # 4 ===***===

var word = "Hello World";
var no = word.lastIndexOf("l");
document.write("<h2>Chapter # 21-25 and Excersice # 4</h2>");
document.write("String: " + word + "<br>");
document.write("Last index of 'l' is: " + no);


// ===***=== Chapter # 21-25 and Excersice # 5 ===***===

var word = "Pakistani";
var charNo = word.charAt(3);
document.write("<h2>Chapter # 21-25 and Excersice # 5</h2>");
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + charNo);


// ===***=== Chapter # 21-25 and Excersice # 6 ===***===

var first = prompt("Enter Your First Name");
var last = prompt("Enter Your Last Name");
var concatenate = first.concat(last);
document.write("<h2>Chapter # 21-25 and Excersice # 6</h2>");
document.write("My name is " + concatenate);


// ===***=== Chapter # 21-25 and Excersice # 7 ===***===

var word = "Hyderabad";
var change = word.replace("Hyder","Islam")
document.write("<h2>Chapter # 21-25 and Excersice # 7</h2>");
document.write("City: " + word + "<br>");
document.write("After replacement: " + change);


// ===***=== Chapter # 21-25 and Excersice # 8 ===***===

var message = "Ali and Sami are best friends. They play cricket and football together.";
var change = message.replace(/and/g,"&");
document.write("<h2>Chapter # 21-25 and Excersice # 8</h2>");
document.write("Message: " + message + "<br>");
document.write("After replacement: " + change);


// ===***=== Chapter # 21-25 and Excersice # 9 ===***===

var value = "472";
var change = Number(value);
document.write("<h2>Chapter # 21-25 and Excersice # 9</h2>");
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br>");
document.write("Value: " + change + "<br>");
document.write("Type: " + typeof change);


// ===***=== Chapter # 21-25 and Excersice # 10 ===***===

var fruit = prompt("Enter your favorite fruit");
var change = fruit.toUpperCase();
document.write("<h2>Chapter # 21-25 and Excersice # 10</h2>");
document.write("User input: " + fruit + "<br>");
document.write("Upper case: " + change);


// ===***=== Chapter # 21-25 and Excersice # 11 ===***===

var word = prompt("Enter a Word");
var firstLetter = word.slice(0,1);
var change1 = firstLetter.toUpperCase();
var otherLetter = word.slice(1);
var change2 = otherLetter.toLowerCase();
document.write("<h2>Chapter # 21-25 and Excersice # 11</h2>");
document.write("User input: " + word + "<br>");
document.write("Title case: " + change1 + change2);


// ===***=== Chapter # 21-25 and Excersice # 12 ===***===

var num = 35.36;
var change = num.toString();
change = change.replace(".","");
document.write("<h2>Chapter # 21-25 and Excersice # 12</h2>");
document.write("Number: " + num + "<br>");
document.write("Result: " + change);


// ===***=== Chapter # 21-25 and Excersice # 13 ===***===

var userName = prompt("Enter your Username");
for(var i = 0; i < userName.length; i++){
    var change = userName.charCodeAt(i);
    if(change == 33 || change == 44 || change == 46 || change == 64){
       alert("Please enter a valid username");
    }
}


// ===***=== Chapter # 21-25 and Excersice # 14 ===***===

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("Welcome to ABC Bakery! What do you want to order sir/ma'am?","Enter the product you want");
var change = user.toLowerCase();
var match = 0;
for(var i = 0; i < change.length; i++){
    if(change == A[i]){
        match = 1;
        alert(user + " is available at index " + i + " in our bakery");
        break;
    }
}
if(match == 0){
    alert("We are sorry. " + user + " is not available in our bakery");
}


// ===***=== Chapter # 21-25 and Excersice # 15 ===***===

var password = prompt("Enter your password");
var a = 0;
var b = 0;
var c = 0;
for(var i = 0; i < password.length; i++){
    var change = password.charCodeAt(i);
    if((change >= 48 && change <= 57) || (change >= 65 && change <= 90) || (change >= 97 && change <= 122)){
        a = 0;
    }
    else{
        a = 1;
        break;
    }
}
if(a == 1){
    alert("Password should contain alphabets and numbers");
}
if(password[0] >= 0 && password[0] <= 9){
    b = 1;
    alert("Password cannot begin with a number");
}
if(password.length < 6){
    c = 1;
    alert("Password must be atleast 6 characters long");
}
if(a == 1 || b == 1 || c == 1){
    alert("Please enter a valid password");
}


// ===***=== Chapter # 21-25 and Excersice # 16 ===***===

var university = "University of Karachi";
var arr = university.split("");
document.write("<h2>Chapter # 21-25 and Excersice # 16</h2>");
for(var i = 0; i < university.length; i++){
    document.write(arr[i] + "<br>");
}


// ===***=== Chapter # 21-25 and Excersice # 17 ===***===

var user = prompt("Enter a word");
var lastWord = user.length -1;
document.write("<h2>Chapter # 21-25 and Excersice # 17</h2>");
document.write("Entered Word is " + user + "<br>");
document.write("Last letter is " + "'" + user[lastWord] + "'");


// ===***=== Chapter # 21-25 and Excersice # 18 ===***===

var sentence = "The quick brown fox jumps over the lazy dog";
var change = sentence.toLowerCase();
var find = change.match(/the/g);
document.write("<h2>Chapter # 21-25 and Excersice # 18</h2>");
document.write("Text: " + sentence + "<br>");
document.write("There are " + find.length + " occurrence(s) of the word 'the'");


// ===***=== Chapter # 26-30 and Excersice # 1 ===***===

var number = prompt("Enter a positive floating point","e.g 0.00");
var change1 = Math.round(number);
var change2 = Math.floor(number);
var change3 = Math.ceil(number);
document.write("<h2>Chapter # 26-30 and Excersice # 1</h2>");
document.write("Number: " + number + "<br>");
document.write("Round off value: " + change1 + "<br>");
document.write("Floor value: " + change2 + "<br>");
document.write("Ceil value: " + change3);


// ===***=== Chapter # 26-30 and Excersice # 2 ===***===

var number = prompt("Enter a negative floating point","e.g -0.00");
var change1 = Math.round(number);
var change2 = Math.floor(number);
var change3 = Math.ceil(number);
document.write("<h2>Chapter # 26-30 and Excersice # 2</h2>");
document.write("Number: " + number + "<br>");
document.write("Round off value: " + change1 + "<br>");
document.write("Floor value: " + change2 + "<br>");
document.write("Ceil value: " + change3);


// ===***=== Chapter # 26-30 and Excersice # 3 ===***===

var number = -4;
var absolute = Math.abs(number);
document.write("<h2>Chapter # 26-30 and Excersice # 3</h2>");
document.write("The absolute value of " + number + " is " + absolute);


// ===***=== Chapter # 26-30 and Excersice # 4 ===***===

var dice = Math.random() * 6;
var newValue = Math.ceil(dice);
document.write("<h2>Chapter # 26-30 and Excersice # 4</h2>");
document.write("Random dice value: " + newValue);


// ===***=== Chapter # 26-30 and Excersice # 5 ===***===

var coin = Math.random() * 2;
var newValue = Math.ceil(coin);
var result = "";
document.write("<h2>Chapter # 26-30 and Excersice # 5</h2>");
if(newValue == 1){
    result = "Tails";
    document.write(newValue + "<br>");
    document.write("Random coin value: " + result);
}
if(newValue == 2){
    result = "Heads";
    document.write(newValue + "<br>");
    document.write("Random coin value: " + result);
}


// ===***=== Chapter # 26-30 and Excersice # 6 ===***===

var number = Math.random() * 100;
var newNumber = Math.ceil(number);
document.write("<h2>Chapter # 26-30 and Excersice # 6</h2>");
document.write("Random number between 1 and 100: " + newNumber);


// ===***=== Chapter # 26-30 and Excersice # 7 ===***===

var weight = prompt("Enter your weight in kilograms");
var newWeight = parseFloat(weight);
document.write("<h2>Chapter # 26-30 and Excersice # 7</h2>");
document.write("The weight of user is " + newWeight + " kilograms");


// ===***=== Chapter # 26-30 and Excersice # 8 ===***===

var num = Math.random() * 10;
var secretNum = Math.ceil(num);
var user = prompt("Enter a number between 1 to 10");
if(user == secretNum){
    alert("Congratulations! You won");
}
else{
    alert("Try again!");
}


// ===***=== Chapter # 31-34 and Excersice # 1 ===***===

var now = new Date();
document.write("<h2>Chapter # 31-34 and Excersice # 1</h2>");
document.write(now);


// ===***=== Chapter # 31-34 and Excersice # 2 ===***===

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var currentMonth = now.getMonth();
var currentMonthName = monthNames[currentMonth];
alert("Current Month: " + currentMonthName);


// ===***=== Chapter # 31-34 and Excersice # 3 ===***===

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var now = new Date();
var currentDay = now.getDay();
var currentDayName = dayNames[currentDay];
alert("Today is " + currentDayName);


// ===***=== Chapter # 31-34 and Excersice # 4 ===***===

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var now = new Date();
var currentDay = now.getDay();
var currentDayName = dayNames[currentDay];
if(currentDayName == dayNames[0] || currentDayName == dayNames[6]){
    alert("It's Fun day");
}


// ===***=== Chapter # 31-34 and Excersice # 5 ===***===

var now = new Date();
var currentDate = now.getDate();
if(currentDate < 16){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}


// ===***=== Chapter # 31-34 and Excersice # 6 ===***===

var now = new Date();
var time = now.getTime();
var mints = time / (1000 * 60);
document.write("<h2>Chapter # 31-34 and Excersice # 6</h2>");
document.write("Current Date: " + now + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + time + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + mints);


// ===***=== Chapter # 31-34 and Excersice # 7 ===***===

var now = new Date();
var currentHours = now.getHours();
if(currentHours < 12){
    alert("It's AM");
}
else{
    alert("It's PM");
}


// ===***=== Chapter # 31-34 and Excersice # 8 ===***===

var now = new Date();
var laterDate = new Date("December 31, 2020");
document.write("<h2>Chapter # 31-34 and Excersice # 8</h2>");
document.write("Later date: " + laterDate);


// ===***=== Chapter # 31-34 and Excersice # 9 ===***===

var now = new Date();
var ramadan1st = new Date("April 25, 2020");
var timeOfNow = now.getTime();
var timeOfRamadan = ramadan1st.getTime();
var diff = timeOfNow - timeOfRamadan;
var todayDiff = diff / (1000 * 60 * 60 * 24);
todayDiff = Math.floor(todayDiff);
document.write("<h2>Chapter # 31-34 and Excersice # 9</h2>");
document.write(todayDiff + " days have passed since 1st Ramadan, 2020");


// ===***=== Chapter # 31-34 and Excersice # 10 ===***===

var now = new Date();
var beginnigYear = new Date("January 1, 2020");
var timeOfNow = now.getTime();
var timeOfBeginnig = beginnigYear.getTime();
var diff = timeOfNow - timeOfBeginnig;
var todayDiff = diff / 1000;
todayDiff = Math.floor(todayDiff);
document.write("<h2>Chapter # 31-34 and Excersice # 10</h2>");
document.write("On referrence date " + now + ", <br>" + todayDiff + " seconds had passed since beginning of 2020");


// ===***=== Chapter # 31-34 and Excersice # 11 ===***===

var now = new Date();
var newHour = new Date();
newHour.setHours(now.getHours() - 1);
document.write("<h2>Chapter # 31-34 and Excersice # 11</h2>");
document.write("Current Date: " + now + "<br>");
document.write("1 hour ago, it was " + newHour);


// ===***=== Chapter # 31-34 and Excersice # 12 ===***===

var now = new Date();
var backYear = new Date();
backYear.setFullYear(now.getFullYear() - 100);
alert("100 Years back, it was " + backYear);


// ===***=== Chapter # 31-34 and Excersice # 13 ===***===

var user = prompt("Enter your age");
var now = new Date();
var nowMili = now.getTime();
var diff = user * 1000 * 60 * 60 * 24 * 30 * 12;
var dobMili = nowMili - diff;
var dob = new Date(dobMili);
var yearOfBirth = dob.getFullYear();
document.write("<h2>Chapter # 31-34 and Excersice # 13</h2>");
document.write("Your age is " + user + "<br>");
document.write("Your birth year is " + yearOfBirth);


// ===***=== Chapter # 31-34 and Excersice # 14 ===***===

var customerName = "ABC Customer";
var now = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = now.getMonth();
var currentMonthName = monthNames[currentMonth];
var numOfUnits = 410;
var chargesPerUnits = 16;
var netAmount = numOfUnits * chargesPerUnits;
var latePay = 350;
var grossAmount = netAmount + latePay;

document.write("<h2>Chapter # 31-34 and Excersice # 14</h2>");
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: " + "<b>" + customerName + "</b>" + "<br>");
document.write("Month: " + "<b>" + currentMonthName + "</b>" + "<br>");
document.write("Number of units: " + "<b>" + numOfUnits + "</b>" + "<br>");
document.write("Charges per units: " + "<b>" + chargesPerUnits + "</b>" + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + "<b>" + netAmount + "</b>" + "<br>");
document.write("Late payment surcharge: " + "<b>" + latePay + "</b>" + "<br>");
document.write("Gross Amount Payable (after Due Date): " + "<b>" + grossAmount + "</b>" + "<br>");



// ===***=== Chapter # 35-38 and Excersice # 1 ===***===

function today(){
    var now = new Date();
    document.write(now);
}
document.write("<h2>Chapter # 35-38 and Excersice # 1</h2>");
today();


// ===***=== Chapter # 35-38 and Excersice # 2 ===***===

function greet(f,l){
    alert("Welcome " + f + " " + l);
}
var first = prompt("Enter Your First Name");
var last = prompt("Enter Your Last Name");
greet(first,last);


// ===***=== Chapter # 35-38 and Excersice # 3 ===***===

function sum(a,b){   
    return a + b;
}
var num1 = prompt("Enter a Number");
var num2 = prompt("Enter another Number");
num1 = Number(num1);
num2 = Number(num2);
var result = sum(num1,num2);
alert(result);


// ===***=== Chapter # 35-38 and Excersice # 4 ===***===

function calculator(num1,num2,operator){
    var total = 0;
    if(operator == "+"){
        total = num1 + num2;
    }
    else if(operator == "-"){
        total = num1 - num2;
    }
    else if(operator == "*"){
        total = num1 * num2;
    }
    else if(operator == "/"){
        total = num1 / num2;
    }
    else if(operator == "%"){
        total = num1 % num2;
    }
    return total;
}
var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");
var operator = prompt("Enter operator","+,-,*,/");
num1 = Number(num1);
num2 = Number(num2);
var x = calculator(num1,num2,operator);
document.write("<h2>Chapter # 35-38 and Excersice # 4</h2>");
document.write(num1 + " " + operator + " " + num2 + " = " +  x);


// ===***=== Chapter # 35-38 and Excersice # 5 ===***===

function square(a){
    return a * a;
}


// ===***=== Chapter # 35-38 and Excersice # 6 ===***===

function factorial(b){
    var total = 1;
    for(var i = 1; i <= b; i++){
        total = total * i;
    }
    return total;
}


// ===***=== Chapter # 35-38 and Excersice # 7 ===***===

document.write("<h2>Chapter # 35-38 and Excersice # 7</h2>");
function counting(s,e){
    for(var i = s; i <= e; i++){
        document.write(i + "<br>");
    }
}
var startNum = prompt("Enter a number from where you want to start counting");
var endNum = prompt("Enter a number at where you want to end counting");
startNum = Number(startNum);
endNum = Number(endNum);
counting(startNum,endNum);



// ===***=== Chapter # 35-38 and Excersice # 8 ===***===

document.write("<h2>Chapter # 35-38 and Excersice # 8</h2>");
function hypotenus(b,p){
    function square(n){
        return n * n;
    }
    var h = square(b) + square(p);
    h = Math.sqrt(h);
    return h;
}
var base = prompt("Enter Base value");
var perpendicular = prompt("Enter Perpendicular value");
base = Number(base);
perpendicular = Number(perpendicular);
var hyp = hypotenus(base,perpendicular);
document.write("hypotenus = " + hyp);


// ===***=== Chapter # 35-38 and Excersice # 9 ===***===

function area(w,h){
    var A = w * h;
    return A;
}

var areaRec = area(10,20);

var width = 10;
var height = 20;
var areaRec = area(width,height);


// ===***=== Chapter # 35-38 and Excersice # 10 ===***===

function palindrome(w){
    var word = "";
    for(var i = w.length - 1; i >= 0; i--){
        word = word + w[i];
    }
    if(word == w){
        alert(w + " is a Palindrome word");
    }
    else{
        alert(w + " is not a Palindrome word");
    }
}
var user = prompt("Enter a word to check whether it is palindrome or not");
palindrome(user);


// ===***=== Chapter # 35-38 and Excersice # 11 ===***===

document.write("<h2>Chapter # 35-38 and Excersice # 11</h2>");
function capital(f){
    var cap = f.split(" ");
    for(var i = 0; i < cap.length; i++){
    var firstLetter = cap[i].slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    var otherLetter = cap[i].slice(1);
    otherLetter = otherLetter.toLowerCase();
    cap[i] = firstLetter + otherLetter;
    }
    cap = cap.join(" ");
    return cap;
}

var str = "the quick brown fox";
var c = capital(str);
document.write(c);


// ===***=== Chapter # 35-38 and Excersice # 12 ===***===

document.write("<h2>Chapter # 35-38 and Excersice # 12</h2>");
function longest(f){
    var word = f.split(" ");
    var max = word[0].length;
    for(var i = 0; i < word.length; i++){
        if(word[i].length >= max){
            max = word[i].length;
            var maxWord = word[i];
        }
    }
    return maxWord;
}

var str = "Web Development Tutorial";
var l = longest(str);
document.write("Longest word is " + l);



// ===***=== Chapter # 35-38 and Excersice # 13 ===***===

document.write("<h2>Chapter # 35-38 and Excersice # 13</h2>");
function occurence(s,l){
    var c = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] == l){
            c = c + 1;
        }
    }
    return c;
}

var str = "JSResourceS.com";
var letter = "o";
var count = occurence(str,letter);
document.write("The occurence of " + "'" + letter + "'" + " is " + count + " times.");


// ===***=== Chapter # 35-38 and Excersice # 14 ===***===

document.write("<h2>Chapter # 35-38 and Excersice # 14</h2>");
function calcCircumference(r){
    var circum = 2 * 3.142 * r;
    document.write("The circumference is " + circum + "<br>");
}

function calcArea(r){
    var area = 3.142 * (r ** 2);
    document.write("The area is " + area + "<br>");
}

calcCircumference(5);
calcArea(5);

