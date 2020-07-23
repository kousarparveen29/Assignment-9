// ===**===   Chapter # 1 and Excercise # 1   ===**===

alert("Welcome to My Web Page!");


// ===**===   Chapter # 1 and Excercise # 2   ===**===

alert("JavaScript Alert","Error! Please enter a valid Password.");


// ===**===   Chapter # 1 and Excercise # 3   ===**===

alert("Welcome to JS Land...\n Happy Coding!");


// ===**===   Chapter # 1 and Excercise # 4   ===**===

alert("Welcome to JS Land...");
alert("Happy Coding!");


// ===**===   Chapter # 1 and Excercise # 5   ===**===

console.log(alert("Hello... I can run JS through my web browser's console"));


// ===**===   Chapter # 1 and Excercise # 6   ===**===

alert("Hello World!");


// ===**===   Chapter # 2 and Excercise # 1   ===**===

var username;


// ===**===   Chapter # 2 and Excercise # 2   ===**===

var myName = "Kousar Parveen";


// ===**===   Chapter # 2 and Excercise # 3   ===**===

var message = "Hello World";
alert(message);


// ===**===   Chapter # 2 and Excercise # 4   ===**===

var name = "Jhone Doe";
var age = "15 years old";
var degree = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(degree);


// ===**===   Chapter # 2 and Excercise # 5   ===**===

var a = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(a);


// ===**===   Chapter # 2 and Excercise # 6   ===**===

var email = ("example@gmail.com");
alert("My email address is " + email);


// ===**===   Chapter # 2 and Excercise # 7   ===**===

var book = "A smarter way to learn JavaScript.";
alert("I am trying to learn from the Book " + book);


// ===**===   Chapter # 2 and Excercise # 8   ===**===

document.write("<h2>Chapter # 2 and Excercise # 8</h2>");
document.write("Yah! I can write HTML content through JavaScript");


// ===**===   Chapter # 2 and Excercise # 9   ===**===

var pattern = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(pattern);


// ===**===   Chapter # 3 and Excercise # 1   ===**===

var age = 25;
alert("I am " + age + " years old");


// ===**===   Chapter # 3 and Excercise # 2   ===**===

var visited = 15;
alert("You have visited this site " + visited + " times");


// ===**===   Chapter # 3 and Excercise # 3   ===**===

var birthYear = 1995;
document.write("<h2>Chapter # 3 and Excercise # 3</h2>");
document.write("My birth year is " + birthYear);
document.write("<br>Data type of my declared variable is " + typeof birthYear);


// ===**===   Chapter # 3 and Excercise # 4   ===**===

var VisitorName = "John Doe";
var ProductTitle = "T-shirt";
var Quantity = "5";
document.write("<h2>Chapter # 3 and Excercise # 4</h2>");
document.write(VisitorName + " ordered " + Quantity + " " + ProductTitle + "(s) on XYZ Clothing store.");


// ===**===   Chapter # 4 and Excercise # 1   ===**===

var a, b, c;


// ===**===   Chapter # 4 and Excercise # 2   ===**===

    // Legal
var fullName;
var full_name;
var full$name;
var fullName2;
var full1stname;
    // Illegal
/*
var 2ndfullName;
var full-Name;
var full,Name;
var full'Name;
var full Name;
*/


// ===**===   Chapter # 4 and Excercise # 3   ===**===

document.write("<h2>Chapter # 4 and Excercise # 3</h2>");
document.write("<h3>Rules for naming JS variables</h3>");
document.write("Variable names can only contain, numbers, $ and _. For example : $my_1stVariable<br>");
document.write("Variable must begin with a letter, $ or _. For example : $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords");


// ===**===   Chapter # 5 and Excercise # 1   ===**===

var a = 3;
var b = 5;
var c = a + b;
document.write("<h2>Chapter # 5 and Excercise # 1</h2>");
document.write("Sum of " + a + " and " + b + " is " + c);


// ===**===   Chapter # 5 and Excercise # 2   ===**===

document.write("<h2>Chapter # 5 and Excercise # 2</h2>");
c = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + c);

c = a * b;
document.write("<br>Multiplication of " + a + " and " + b + " is " + c);

c = a / b;
document.write("<br>Division of " + a + " and " + b + " is " + c);

c = a % b;
document.write("<br>Modulus of " + a + " and " + b + " is " + c);


// ===**===   Chapter # 5 and Excercise # 3   ===**===

document.write("<h2>Chapter # 5 and Excercise # 3</h2>");
var num ;
document.write("Value after variable declaration is " + num);

num = 5;
document.write("<br>Initial value: " + num);

num = ++num;
document.write("<br>Value after increment is: " + num);

num = num + 7;
document.write("<br>Value after addition is: " + num);

num = --num;
document.write("<br>Value after decrement is: " + num);

num = num % 3;
document.write("<br>The remainder is: " + num);


// ===**===   Chapter # 5 and Excercise # 4   ===**===

var T_Price = 600;
var NumofTickets = 5;
var TotalCost = T_Price * NumofTickets + " PKR";
document.write("<h2>Chapter # 5 and Excercise # 4</h2>");
document.write("Total cost to buy " + NumofTickets + " tickets to a movie is " + TotalCost);


// ===**===   Chapter # 5 and Excercise # 5   ===**===

document.write("<h2>Chapter # 5 and Excercise # 5</h2>");
document.write("<h3>Table of 4</h3>");
document.write(4 + " X " + 1 + " = "  + "4" + "<br>");
document.write(4 + " X " + 2 + " = "  + "8" + "<br>");
document.write(4 + " X " + 3 + " = "  + "12" + "<br>");
document.write(4 + " X " + 4 + " = "  + "16" + "<br>");
document.write(4 + " X " + 5 + " = "  + "20" + "<br>");
document.write(4 + " X " + 6 + " = "  + "24" + "<br>");
document.write(4 + " X " + 7 + " = "  + "28" + "<br>");
document.write(4 + " X " + 8 + " = "  + "32" + "<br>");
document.write(4 + " X " + 9 + " = "  + "36" + "<br>");
document.write(4 + " X " + 10 + " = "  + "40" + "<br>");


// ===**===   Chapter # 5 and Excercise # 6   ===**===

document.write("<h2>Chapter # 5 and Excercise # 6</h2>");
var tempC = 32;
document.write("<h3>Convert to Fahrenheit</h3>")
document.write("32<sup>o</sup>C is " + [(tempC * 9/5) + 32] + " <sup>o</sup>F");

var tempF = 40;
document.write("<h3>Convert to Celsius</h3>")
document.write("32<sup>o</sup>F is " + [(tempF - 32) * 5/9] + " <sup>o</sup>C");


// ===**===   Chapter # 5 and Excercise # 7   ===**===

var P1 = 650;
var P2 = 100;
var Q1 = 3;
var Q2 = 7;
var shipCh = 100;
document.write("<h2>Chapter # 5 and Excercise # 7</h2>");
document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is " + P1 + "<br>");
document.write("Quantity of item 1 is " + Q1 + "<br>");
document.write("Price of item 2 is " + P2 + "<br>");
document.write("Quantity of item 2 is " + Q2 + "<br>");
document.write("Shipping Charges " + shipCh + "<br><br>");
document.write("Total cost of your order is " + [(P1 * Q1) + (P2 * Q2) + shipCh]);


// ===**===   Chapter # 5 and Excercise # 8   ===**===

var TM = 980;
var OB = 804;
document.write("<h2>Chapter # 5 and Excercise # 8</h2>");
document.write("<h3>Mark Sheet</h3>");
document.write("Total marks: " + TM + "<br>");
document.write("Obtained marks: " + OB + "<br>");
document.write("Percentage: " + [OB / TM * 100] + "%");


// ===**===   Chapter # 5 and Excercise # 9   ===**===

var US = 10;
var SA = 25;
var PKRs = (10 * 104.80) + (25 * 28);
document.write("<h2>Chapter # 5 and Excercise # 9</h2>");
document.write("<h3>Currency in PKR</h3>");
document.write("Total Currency in PKR: " + PKRs);


// ===**===   Chapter # 5 and Excercise # 10   ===**===

var N = 10;
var result = (N + 5 * 10) / 2; 
document.write("<h2>Chapter # 5 and Excercise # 10</h2>");
document.write("<h3>Arithmetic</h3>");
document.write("Result: " + result);


// ===**===   Chapter # 5 and Excercise # 11   ===**===

var currentYear = 2020;
var birthYear = 1995;
var age = currentYear - birthYear;
document.write("<h2>Chapter # 5 and Excercise # 11</h2>");
document.write("<h3>Age Calculator</h3>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age);


// ===**===   Chapter # 5 and Excercise # 12   ===**===

var r = 20;
var pi = 3.142;
var CofCircle = 2 * r *pi;
var AofCircle = pi * r**2;
document.write("<h2>Chapter # 5 and Excercise # 12</h2>");
document.write("<h3>The Geometrizer</h3>");
document.write("Radius of a circle: " + r + "<br>");
document.write("The circumference is: " + CofCircle + "<br>");
document.write("The area is: " + AofCircle);


// ===**===   Chapter # 5 and Excercise # 13   ===**===

var snack = "Chocolate Cake";
var currentAge = 25;
var maxAge = 70;
var amount = 2;
var totalNeed = (maxAge - currentAge) * 2 * 365;
document.write("<h2>Chapter # 5 and Excercise # 13</h2>");
document.write("<h3>The Lifetime Supply Calculator</h3>");
document.write("Favourite Snack: " + snack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snack per day: " + amount + "<br>");
document.write("You will need " + totalNeed + " " + snack + " to last you until the ripe old age of " + maxAge);


// ===**===   Chapter # 6-9 and Excercise # 1   ===**===

var a = 10;
document.write("<h2>Chapter # 6-9 and Excercise # 1</h2>");
document.write("<h3>Result:</h3>");
document.write("The value of a is: " + a + "<br><br>");

a = ++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

a = a++;
document.write("The value of a++ is: " + a + "<br>");
document.write("Now the value of a is: " + ++a + "<br><br>");

a = --a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

a = a--;
document.write("The value of a-- is: " + a + "<br>");
document.write("Now the value of a is: " + --a);


// ===**===   Chapter # 6-9 and Excercise # 2   ===**===

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<h2>Chapter # 6-9 and Excercise # 2</h2>");
document.write("<h3>Result:</h3>");
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br><br>");

a =2;
b =1;
document.write(--a + "<br>");

a =2;
b =1;
document.write(--a + " - " + --b + "<br>");

a =2;
b =1;
document.write(--a + " - " + --b + " + " + ++b + "<br>");

a =2;
b =1;
document.write(--a + " - " + --b + " + " + ++b + " + " + b-- + "<br>");


// ===**===   Chapter # 6-9 and Excercise # 3   ===**===

// var name = prompt("Enter Your Name");
// alert("Welcome " + name);


// ===**===   Chapter # 6-9 and Excercise # 4   ===**===

var number = prompt("Enter a Number", 5);
document.write("<h2>Chapter # 6-9 and Excercise # 4</h2>");
document.write("<h3>Multiplication of table</h3>");
document.write(number + " X " + " 1 " + " = " + number * 1 + "<br>");
document.write(number + " X " + " 2 " + " = " + number * 2 + "<br>");
document.write(number + " X " + " 3 " + " = " + number * 3 + "<br>");
document.write(number + " X " + " 4 " + " = " + number * 4 + "<br>");
document.write(number + " X " + " 5 " + " = " + number * 5 + "<br>");
document.write(number + " X " + " 6 " + " = " + number * 6 + "<br>");
document.write(number + " X " + " 7 " + " = " + number * 7 + "<br>");
document.write(number + " X " + " 8 " + " = " + number * 8 + "<br>");
document.write(number + " X " + " 9 " + " = " + number * 9 + "<br>");
document.write(number + " X " + " 10 " + " = " + number * 10 + "<br>");


// ===**===   Chapter # 6-9 and Excercise # 5   ===**===

var sub1 = prompt("Enter Subject 1");
var sub2 = prompt("Enter Subject 2");
var sub3 = prompt("Enter Subject 3");
var OBsub1 = prompt("Enter Your Marks of " + sub1);
var OBsub2 = prompt("Enter Your Marks of " + sub2);
var OBsub3 = prompt("Enter Your Marks of " + sub3);
var TM = 100;
OBsub1 = parseInt(OBsub1);
OBsub2 = parseInt(OBsub2);
OBsub3 = parseInt(OBsub3);
var GOBtotal = OBsub1 + OBsub2 + OBsub3;
document.write("<h2>Chapter # 6-9 and Excercise # 5</h2>");
document.write("<h3>Mark Sheet</h3>" + 
                "<table>" + 
                    "<tr>" + 
                        "<th>Subjects</th>" + 
                        "<th>Total Marks</th>" + 
                        "<th>Obtained Marks</th>" + 
                        "<th>Percentage</th>" + 
                    "</tr>" + 
                    "<tr>" + 
                        "<td>" + sub1 + "</td>" + 
                        "<td>" + TM + "</td>" + 
                        "<td>" + OBsub1 + "</td>" + 
                        "<td>" + (OBsub1 / TM * 100) + "% </td>" + 
                    "</tr>" + 
                    "<tr>" + 
                        "<td>" + sub2 + "</td>" + 
                        "<td>" + TM + "</td>" + 
                        "<td>" + OBsub2 + "</td>" + 
                        "<td>" + (OBsub2 / TM * 100) + "% </td>" + 
                    "</tr>" + 
                    "<tr>" + 
                        "<td>" + sub3 + "</td>" + 
                        "<td>" + TM + "</td>" + 
                        "<td>" + OBsub3 + "</td>" + 
                        "<td>" + (OBsub3 / TM * 100) + "% </td>" + 
                    "</tr>" + 
                    "<tr>" +  
                        "<td></td>" + 
                        "<td>300</td>" + 
                        "<td>" + GOBtotal + "</td>" + 
                        "<td>" + (GOBtotal / 300 * 100) + "% </td>" + 
                    "</tr>" + 
                "</table>");


// ===**===   Chapter # 9-11 and Excercise # 1   ===**===

var city = prompt("Enter City Name");
if(city == "Karachi"){
    alert("Welcome to the City of Lights");
}


// ===**===   Chapter # 9-11 and Excercise # 2   ===**===

var gender = prompt("Enter Gender");
if(gender == "male"){
    alert("Good Morning Sir");
}
if(gender == "female"){
    alert("Good Morning Ma'am");
}


// ===**===   Chapter # 9-11 and Excercise # 3   ===**===

var color = prompt("Enter Signal Color");
if(color == "red"){
    alert("Must Stop");
}
if(color == "yellow"){
    alert("Ready to move");
}
if(color == "green"){
    alert("Move now");
}


// ===**===   Chapter # 9-11 and Excercise # 4   ===**===

var fuel = prompt("Enter Current Fuel in Your Vehicle in Litres");
if(fuel < "0.25 litres"){
    alert("Please refill the fuel in your car");
}


// ===**===   Chapter # 9-11 and Excercise # 5   ===**===

var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if(b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if(c++ === 13){
    alert("codition 1 is true");
}
if(c === 13){
    alert("condition 2 is true");
}
if(++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}

if(true){
    alert("True");
}
if(false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

document.write("<h2>Chapter # 9-11 Excercise 5</h2>");
document.write("(a) given condition for variable a is true" + "<br>" +
                "(c) condition 2 is true" + "<br>" + 
                    "condition 4 is true" + "<br>" + 
                "(d) The cost equals" + "<br>" + 
                "(e) True" + "<br>" + 
                "(f) car is smaller than cat");


// ===**===   Chapter # 9-11 and Excercise # 6   ===**===

var OM = prompt("Enter Obtained Marks of Three Subjects");
var TM = prompt("Enter Total Marks of Three Subjects");
var percent = OM / TM * 100;
if(percent >= 80){
    document.write("<h2>Chapter # 9-11 and Excercise # 6</h2>");
    document.write("<h3>Marks Sheet</h3>");
    document.write("Total marks : " + TM + "<br>" + 
                    "Marks obtained : " + OM + "<br>" +
                    "Percentage : " + percent + "%" + "<br>" +
                    "Grade : A-one" + "<br>" +
                    "Remarks : Excellent");
}
else if(percent >= 70){
    document.write("<h3>Marks Sheet</h3>");
    document.write("Total marks : " + TM + "<br>" + 
                    "Marks obtained : " + OM + "<br>" +
                    "Percentage : " + percent + "%" + "<br>" +
                    "Grade : A" + "<br>" +
                    "Remarks : Good");
}
else if(percent >= 60){
    document.write("<h3>Marks Sheet</h3>");
    document.write("Total marks : " + TM + "<br>" + 
                    "Marks obtained : " + OM + "<br>" +
                    "Percentage : " + percent + "%" + "<br>" +
                    "Grade : B" + "<br>" +
                    "Remarks : You need to improve");
}
else if(percent < 60){
    document.write("<h3>Marks Sheet</h3>");
    document.write("Total marks : " + TM + "<br>" + 
                    "Marks obtained : " + OM + "<br>" +
                    "Percentage : " + percent + "%" + "<br>" +
                    "Grade : Fail" + "<br>" +
                    "Remarks : Sorry");
}


// ===**===   Chapter # 9-11 and Excercise # 7   ===**===

var secretNum = 4;
var guessNum = prompt("Guess the Secret Number");
if(guessNum == secretNum){
    alert("Bingo! Correct answer");
}

if(guessNum == ++secretNum){
    alert("Close enough to the correct answer");
}


// ===**===   Chapter # 9-11 and Excercise # 8   ===**===

var n = prompt("Enter a Number");
var ans = n % 3;
if(ans == 0){
    alert("The number is divisible by 3");
}


// ===**===   Chapter # 9-11 and Excercise # 9   ===**===

var x = prompt("Enter a number");
var y = x % 2;
if(y == 0){
    alert("It is an even number");
}
if(y == 1){
    alert("It is an odd number");
}


// ===**===   Chapter # 9-11 and Excercise # 10   ===**===

var t = prompt("Enter current temperture");
if(t > 40){
    alert("It is too hot outside");
}
else if(t > 30){
    alert("The Weather today is Normal");
}
else if(t > 20){
    alert("Today’s Weather is cool");
}
else if(t > 10){
    alert("OMG! Today’s weather is so Cool");
}


// ===**===   Chapter # 9-11 and Excercise # 11   ===**===

var firstNum = prompt("Enter First Number");
var secondNum = prompt("Enter Second Number");
var operation = prompt("Enter Operation e.g +, -, /, *, %");
firstNum = parseInt(firstNum);
secondNum =parseInt(secondNum);
if(operation == "+"){
    alert(firstNum + secondNum);
}

if(operation == "-"){
    alert(firstNum - secondNum);
}

if(operation == "*"){
    alert(firstNum * secondNum);
}

if(operation == "/"){
    alert(firstNum / secondNum);
}

if(operation == "%"){
    alert(firstNum % secondNum);
}


// ===**===   Chapter # 12-13 and Excercise # 1   ===**===

var a = prompt("Enter a number or character");
var b = a.charCodeAt(0);
if(b >= 48 && b <= 57){
    alert(a + " is a Number");
}

else if(b >= 65 && b <= 90){
    alert(a + " is an Uppercase");
}

else if(b >= 97 && b <= 122){
    alert(a + " is a Lowercase");
}


// ===**===   Chapter # 12-13 and Excercise # 2   ===**===

var int1 = prompt("Enter First Integer","0");
var int2 = prompt("Enter Second Integer","0");
if(int1 > int2){
    alert(int1 + " is larger than " + int2);
}

else if(int2 > int1){
    alert(int2 + " is larger than " + int1);
}

else if(int1 == int2){
    alert(int1 + " is equal to " + int2);
}


// ===**===   Chapter # 12-13 and Excercise # 3   ===**===

var num = prompt("Enter a Number","0");
if(num > 0){
    alert(num + " is Positive");
}

else if(num < 0){
    alert(num + " is Negative");
}

else if(num == 0){
    alert(num + " is Zero");
}


// ===**===   Chapter # 12-13 and Excercise # 4   ===**===

var ch = prompt("Enter a character","A-Z or a-z");
if(ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U" || ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u"){
    alert("True");
}

else{
    alert("False");
}


// ===**===   Chapter # 12-13 and Excercise # 5   ===**===

var originalPass = "java";
var pass = prompt("Enter Your Password");
if(pass == ""){
    alert("Please enter your password");
    pass = prompt("Enter Your Password");
}

else if(originalPass == pass){
    alert("Correct! The password you entered matches the original password");
}

else{
    alert("Incorrect password");
}


// ===**===   Chapter # 12-13 and Excercise # 6   ===**===

var greeting; 
var hour = 13; 
if(hour < 18){ 
    greeting = "Good day"; 	
} 

else{
    greeting = "Good evening"; 
}


// ===**===   Chapter # 12-13 and Excercise # 7   ===**===

var time = prompt("Enter Current Time in 24 hours like: 1900 = 7pm");
if(time >= 0000 && time < 1200){
    alert("Good Morning!");
}

else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}

else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
}

else if(time >=2100 && time <= 2359){
    alert("Good Night!");
}

else{
    alert("Invalid Time");
}


// ===**===   Chapter # 14-16 and Excercise # 1   ===**===

var studentNames = [];


// ===**===   Chapter # 14-16 and Excercise # 2   ===**===

var names = {};


// ===**===   Chapter # 14-16 and Excercise # 3   ===**===

var animals = ["cat","dog","fish","elephant"];


// ===**===   Chapter # 14-16 and Excercise # 4   ===**===

var numbers = [10,20,30,40];


// ===**===   Chapter # 14-16 and Excercise # 5   ===**===

var boolean = [true,false];


// ===**===   Chapter # 14-16 and Excercise # 6   ===**===

var mixedArr = [22,"ali","10",true];


// ===**===   Chapter # 14-16 and Excercise # 7   ===**===

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h2>Chapter # 14-16 and Excercise # 7</h2>");
document.write("<h3>Qualification</h3>");
document.write("1) " + qualification[0] + "<br>");
document.write("2) " + qualification[1] + "<br>");
document.write("3) " + qualification[2] + "<br>");
document.write("4) " + qualification[3] + "<br>");
document.write("5) " + qualification[4] + "<br>");
document.write("6) " + qualification[5] + "<br>");
document.write("7) " + qualification[6] + "<br>");
document.write("8) " + qualification[7] + "<br>");


// ===**===   Chapter # 14-16 and Excercise # 8   ===**===

var S_name = ["Asad", "Waqas", "Raza"];
var score = [410, 350, 280];
var percent = [score[0] / 500 * 100, score[1] / 500 * 100, score[2] / 500 * 100];
document.write("<h2>Chapter # 14-16 and Excercise # 8</h2>");
document.write("<h3>Score And Percentage of Students</h3>");
document.write("Score of " + S_name[0] + " is " + score[0] + ". Percentage: " + percent[0] + "%<br>");
document.write("Score of " + S_name[1] + " is " + score[1] + ". Percentage: " + percent[1] + "%<br>");
document.write("Score of " + S_name[2] + " is " + score[2] + ". Percentage: " + percent[2] + "%<br>");


// ===**===   Chapter # 14-16 and Excercise # 9   ===**===

var color = ["Red", "Green", "Blue", "Black"];
document.write("<h2>Chapter # 14-16 and Excercise # 9</h2>");
document.write(color + "<br>");

var c = prompt("Enter the color you want to enter in the beginning");
color.unshift(c);
document.write("a) " + color + "<br>");

c = prompt("Enter the color you want to enter in the end");
color.push(c);
document.write("b) " + color + "<br>");

color.unshift("Brown", "Yellow");
document.write("c) " + color + "<br>");

color.shift();
document.write("d) " + color + "<br>");

color.pop();
document.write("e) " + color + "<br>");

c = prompt("Enter the Color you want to add");
var p = prompt("Enter the Position of the color where you want to add that color","0-9");
color.splice(p, 0, c);
document.write("f) " + color + "<br>");

c = prompt("Enter the index number of the color you want to remove","0-9");
p = prompt("Enter how many colors you want to remove","0-9");
color.splice(c,p)
document.write("g) " + color + "<br>");


// ===**===   Chapter # 14-16 and Excercise # 10   ===**===

var studentScore = [320,230,480,120];
document.write("<h2>Chapter # 14-16 and Excercise # 10</h2>");
document.write("<h3>Ascending Order</h3>");
document.write("Score of Students: " + studentScore + "<br>");
studentScore.sort();
document.write("Ordered Score of Students: " + studentScore + "<br>");


// ===**===   Chapter # 14-16 and Excercise # 11   ===**===

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h2>Chapter # 14-16 and Excercise # 11</h2>");
document.write("<h3>Cities List:</h3>");
document.write(cities);

var newCities = cities.slice(2,4);
document.write("<h3>Selected Cities List:</h3>");
document.write(newCities);


// ===**===   Chapter # 14-16 and Excercise # 12   ===**===

var arr = ["This", "is", "my", "cat"];
document.write("<h2>Chapter # 14-16 and Excercise # 12</h2>");
document.write("<h3>Array:</h3>");
document.write(arr);

var newArr = arr.join(" ");
document.write("<h3>String:</h3>");
document.write(newArr);


// ===**===   Chapter # 14-16 and Excercise # 13   ===**===

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h2>Chapter # 14-16 and Excercise # 13</h2>");
document.write("<h3>Devices:</h3>");
document.write(devices + "<br><br>");

document.write("Out: <br>");
document.write(devices.shift() + "<br>");

document.write("Out: <br>");
document.write(devices.shift() + "<br>");

document.write("Out: <br>");
document.write(devices.shift() + "<br>");

document.write("Out: <br>");
document.write(devices.shift() + "<br>");


// ===**===   Chapter # 14-16 and Excercise # 14   ===**===

var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("<h2>Chapter # 14-16 and Excercise # 14</h2>");
document.write("<h3>Devices:</h3>");
document.write(devices + "<br><br>");

document.write("Out: <br>");
document.write(devices.pop() + "<br>");

document.write("Out: <br>");
document.write(devices.pop() + "<br>");

document.write("Out: <br>");
document.write(devices.pop() + "<br>");

document.write("Out: <br>");
document.write(devices.pop() + "<br>");


// ===**===   Chapter # 14-16 and Excercise # 15   ===**===

var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Chapter # 14-16 and Excercise # 15</h2>");
document.write("<h3>Dropdown</h3>");
document.write("<select>");
document.write("<option>" + mobile[0] + "</option>");
document.write("<option>" + mobile[1] + "</option>");
document.write("<option>" + mobile[2] + "</option>");
document.write("<option>" + mobile[3] + "</option>");
document.write("<option>" + mobile[4] + "</option>");
document.write("<option>" + mobile[5] + "</option>");
document.write("</select>");


// ===**===   Chapter # 17-20 and Excercise # 1   ===**===

var multi = [
    [],
    [],
    []
];


// ===**===   Chapter # 17-20 and Excercise # 2   ===**===

var value = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];


// ===**===   Chapter # 17-20 and Excercise # 3   ===**===

document.write("<h2>Chapter # 17-20 and Excercise # 3</h2>");
document.write("<h3>Counting</h3>");
for(var a = 1; a <= 10; a++){
    document.write(a + "<br>");
}


// ===**===   Chapter # 17-20 and Excercise # 4   ===**===

document.write("<h2>Chapter # 17-20 and Excercise # 4</h2>");
document.write("<h3>Multiplication of Table</h3>");
var input1 = prompt("Enter a number to show its multiplication table");
var input2 = prompt("Enter length of multiplication table");
for(var b = 1; b <= input2; b++){
    document.write(input1 + " X " + b + " = " + input1 * b + "<br>");
}


// ===**===   Chapter # 17-20 and Excercise # 5   ===**===

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>Chapter # 17-20 and Excercise # 5</h2>");
document.write("<h3>Fruits</h3>");
for(var f = 0; f <= 4; f++){
    document.write(fruits[f] + "<br>");
}

document.write("<br>");
for(var f = 0; f <= 4; f++){
    document.write("Element at index " + f + " is " + fruits[f] + "<br>");
}


// ===**===   Chapter # 17-20 and Excercise # 6   ===**===

document.write("<h2>Chapter # 17-20 and Excercise # 6</h2>");
document.write("<h3>Counting</h3>");
for(var c = 1; c <= 15; c++){
    document.write(c + ",");
}

document.write("<h3>Reverse Counting</h3>");
for(var c = 10; c >= 1; c--){
    document.write(c + ",");
}

document.write("<h3>Even</h3>");
for(var c = 0; c <= 20; c=c+2){
    document.write(c + ",");
}

document.write("<h3>Odd</h3>");
for(var c = 1; c <= 19; c=c+2){
    document.write(c + ",");
}

document.write("<h3>Series</h3>");
for(var c = 2; c <= 20; c=c+2){
    document.write(c + "k,");
}


// ===**===   Chapter # 17-20 and Excercise # 7   ===**===

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B = prompt("Welcome to ABC Bakery! What do you want to order sir/ma'am?","Enter product name");
var match = 0;
for(var c = 0; c <= 4; c++){
    if(B === A[c]){
        match = 1;
        alert(B + " is available at Index " + c + " in our bakery");
        break;
    }
}

if(match == 0){
    alert("We are sorry. " + B + " is not available in our bakery");
}


// ===**===   Chapter # 17-20 and Excercise # 8   ===**===

document.write("<h2>Chapter # 17-20 and Excercise # 8</h2>");
document.write("<h3>Largest Number</h3>");
var A = [24,53,78,91,12];
document.write("Array Items: " + A + "<br>");

var max = A[0];
for(var a = 0; a < A.length; a++){
    if(A[a] >= max){
        max = A[a];
    }
}

document.write("The largest number is " + max);


// ===**===   Chapter # 17-20 and Excercise # 9   ===**===

document.write("<h2>Chapter # 17-20 and Excercise # 9</h2>");
document.write("<h3>Smallest Number</h3>");
var A = [24,53,78,91,12];
document.write("Array Items: " + A + "<br>");

var min = A[0];
for(var a = 0; a < A.length; a++){
    if(A[a] <= min){
        min = A[a];
    }
}

document.write("The smallest number is " + min);


// ===**===   Chapter # 17-20 and Excercise # 10   ===**===

document.write("<h2>Chapter # 17-20 and Excercise # 10</h2>");
document.write("<h3>Multiplication of 5</h3>");
for(var a = 1; a <= 20; a++){
    document.write((a * 5) + ", ");
}




