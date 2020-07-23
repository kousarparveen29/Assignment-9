//       **~** Chapter # 38 to 42 Excercise # 1 **~**

function power(a, b) {
    var ans = a ** b;
    return ans;
}

//       **~** Chapter # 38 to 42 Excercise # 2 **~**

var year = prompt("Enter a year to check whether it is leap year or not");

function leapYear(y){
    var ly = y % 4;
    if(ly == 0){
        alert(year + " is a leap year");
    }
    else{
        alert(year + " is not a leap year");
    }
}

leapYear(year);


//       **~** Chapter # 38 to 42 Excercise # 3 **~**


function S(x, y, z) {
    var s = (x + y + z) / 2;
    return s;
}

function areaOfTriangle(a, b, c) {
    var s = S(a, b, c);
    var area = s * (s - a) * (s - b) * (s - c);
    return area;
}
var a = 10;
var b = 15;
var c = 10;
var triangleArea = areaOfTriangle(a, b, c);

document.write("<h1> Chapter # 38 to 42 Excercise # 3 </h1>")
document.write("The area of Triangle is " + triangleArea);


//       **~** Chapter # 38 to 42 Excercise # 4 **~**

var subject1 = prompt("Enter your marks in subject1");
var subject2 = prompt("Enter your marks in subject2");
var subject3 = prompt("Enter your marks in subject3");
var sub1 = Number(subject1);
var sub2 = Number(subject2);
var sub3 = Number(subject3);

function mainFunction() {
    var avg = average(sub1, sub2, sub3);
    var percent = percentage(sub1, sub2, sub3);
    document.write("<h1> Chapter # 38 to 42 Excercise # 4 </h1>")
    document.write("The average of marks in three subjects is " + avg + "<br>");
    document.write("The percentage of marks in three subjects is " + percent + "%");
}

function average(a, b, c) {
    var av = (a + b + c) / 3;
    return av;
}

function percentage(a, b, c) {
    var p = (a + b + c) / 300 * 100;
    return p;
}

mainFunction();


//       **~** Chapter # 38 to 42 Excercise # 5 **~**

var str = "Thie is example paragraph";

function findIndex(str,character,index = 0){
    var a;
    for(var i = index; i < str.length; i++){
        if(character === str[i]){
            a = i;
            break;
        }
    }
    return a;
}

document.write("<h1> Chapter # 38 to 42 Excercise # 5 </h1>")
document.write(findIndex(str,"i"));



//       **~** Chapter # 38 to 42 Excercise # 6 **~**

var sentence = "This is example text para";

function delVowel(sentence){
    // var v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var rep = "";
    for(var i = 0; i < sentence.length; i++){
        if(sentence[i] == "a" || sentence[i] == "e" || sentence[i] == "i" || sentence[i] == "o" || sentence[i] == "u" || sentence[i] == "A" || sentence[i] == "E" || sentence[i] == "I" || sentence[i] == "O" || sentence[i] == "U"){
            continue;
        }
        else{
            rep = rep + sentence[i];
        }
    }
    return rep;
}

document.write("<h1> Chapter # 38 to 42 Excercise # 6 </h1>")
document.write(delVowel(sentence));


//       **~** Chapter # 38 to 42 Excercise # 7 **~**


function vowelSuccession(sentence) {
    var vowel = [];
    var v;
    for (var i = 0; i < sentence.length; i++) {
        switch (sentence[i]) {
            case "a": case "e": case "i": case "o": case "u": case "A": case "E": case "I": case "O": case "U":
                switch (sentence[i + 1]) {
                    case "a": case "e": case "i": case "o": case "u": case "A": case "E": case "I": case "O": case "U":
                        v = sentence[i] + sentence[i + 1];
                        vowel.push(v);
                }
        }
    }
    return vowel;
}

var s = "Pleases read this application and give me gratuity";
document.write("<h1> Chapter # 38 to 42 Excercise # 7 </h1>")
document.write(vowelSuccession(s));


//       **~** Chapter # 38 to 42 Excercise # 8 **~**

var dis = +prompt("Enter the distance between two cities (in km)");

function toMeter(km) {
    var m = km * 1000;
    return m;
}

function toFeet(km) {
    var f = km * 3280.84;
    return f;
}

function toInch(km) {
    var i = km * 39370.07874;
    return i;
}

function toCentimeter(km) {
    var cm = km * 100000;
    return cm;
}

var distanceInMeter = toMeter(dis);
var distanceInFeet = toFeet(dis);
var distanceInInch = toInch(dis);
var distanceInCentimeter = toCentimeter(dis);
document.write("<h1> Chapter # 38 to 42 Excercise # 8 </h1>")
document.write(dis + " km = " + distanceInMeter + " m<br>");
document.write(dis + " km = " + distanceInFeet + " foot<br>");
document.write(dis + " km = " + distanceInInch + " inch<br>");
document.write(dis + " km = " + distanceInCentimeter + " cm");


//       **~** Chapter # 38 to 42 Excercise # 9 **~**

function overTimePay(o) {
    var pay = 0;
    if (totalWorkHour > 40) {
        var overTimeHours = o - 40;;
        pay = overTimeHours * 12;
    document.write("Overtime pay of an employee for " + overTimeHours + " hours overtime is " + pay + " Rs.");

    }
    else {
    document.write("He/She worked less than 40 hours so no overtime pay is given.");
    } 
}

var totalWorkHour = +prompt("Enter the total working hours of an employee");
document.write("<h1> Chapter # 38 to 42 Excercise # 9 </h1>");
overTimePay(totalWorkHour);



//       **~** Chapter # 38 to 42 Excercise # 10 **~**

function cashWithdraw(c){
    var cash = c;
    var hundred;
    var fifty;
    var ten;
    if(c >= 100){
        var r = c % 100;
        r;
        hundred = Math.floor(cash / 100);
    }
    if(r >= 50){
        r = r - 50;
        fifty = 1;
    }
    if(r < 50){
        ten = Math.floor(r / 10);
    }
    document.write("You will have " + hundred + " hundred notes " + fifty + " fifty note " + ten + " ten notes.");
}

var getCash = +prompt("Enter amount you want to withdraw");
document.write("<h1> Chapter # 38 to 42 Excercise # 10 </h1>")
document.write("Amount: " + getCash + "<br>");
cashWithdraw(getCash);


//       **~** Chapter # 43 to 48 Excercise # 2 **~**

function mobile() {
    alert("Thanks for purchasing a phone from us");
}


//       **~** Chapter # 43 to 48 Excercise # 3 **~**

function delet(rw) {
    var r = document.getElementById(rw);
    r.remove();
}

//       **~** Chapter # 43 to 48 Excercise # 4 **~**

function newImage() {
    document.getElementById("fall").src = "images/spring.jpeg";

}

function oldImage() {
    document.getElementById("fall").src = "images/fall.jpg";

}


//       **~** Chapter # 43 to 48 Excercise # 5 **~**

function countInc() {
    var c = document.getElementById("count");
    var newNUm = c.innerHTML++;
    newNUm.innerHTML;
}

function countDec() {
    var c = document.getElementById("count");
    var newNUm = c.innerHTML--;
    newNUm.innerHTML;
}


//       **~** Chapter # 49 to 52 Excercise # 1 **~**

function formSub() {
    var first = document.getElementById("first");
    var last = document.getElementById("last");
    var mail = document.getElementById("mail");
    var dob = document.getElementById("dob");
    var gen = document.getElementsByName("gender");
    var fn = document.getElementById("fullName");
    var eAdd = document.getElementById("e-Add");
    var dBirth = document.getElementById("dateBirth");
    var gd = document.getElementById("ge");
    fn.innerHTML = first.value + " " + last.value;
    eAdd.innerHTML = mail.value;
    dBirth.innerHTML = dob.value;
    var getGender;
    for (var i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            getGender = gen[i].value;
        }
    }
    gd.innerHTML = getGender;
    var form2 = document.getElementsByClassName("form2");
    form2[0].style.visibility = "visible";
    first.value = "";
    last.value = "";
    mail.value = "";
    dob.value = "";
    
}


//       **~** Chapter # 49 to 52 Excercise # 2 **~**

function learnMore() {
    var r = document.getElementById("par");
    var t = "Autumn, also known as fall in North American English, is one of the four temperate seasons. Autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere), when the duration of daylight becomes noticeably shorter and the temperature cools considerably. One of its main features in temperate climates is the shedding of leaves from deciduous trees.Some cultures regard the autumnal equinox as 'mid-autumn', while others with a longer temperature lag treat it as the start of autumn. Meteorologists (and most of the temperate countries in the southern hemisphere).";
    r.innerHTML = t;

}


//       **~** Chapter # 49 to 52 Excercise # 3 **~**
var a = 0;
function addData() {
    var tableform = document.getElementById("tableForm");
    var tableLen = tableform.childNodes.length - 1;
    var sName = document.getElementById("s-name");
    var sClass = document.getElementById("s-class");
    var colTd1 = document.createElement("td");
    var colTd2 = document.createElement("td");
    var colTd3 = document.createElement("td");
    var colTd4 = document.createElement("td");
    var colTd5 = document.createElement("td");
    var tn1 = document.createTextNode(tableLen);
    var tn2 = document.createTextNode(sName.value);
    var tn3 = document.createTextNode(sClass.value);
    var eb = document.createElement("button");
    var teb = document.createTextNode("Edit");
    var sb = document.createElement("button");
    var tsb = document.createTextNode("Save");
    var db = document.createElement("button");
    var tdb = document.createTextNode("Delete");
    var cb = document.createElement("button");
    var tcb = document.createTextNode("Cancel");

    colTd1.appendChild(tn1);
    colTd2.appendChild(tn2);
    colTd3.appendChild(tn3);
    eb.appendChild(teb);
    sb.appendChild(tsb);
    db.appendChild(tdb);
    cb.appendChild(tcb);

    colTd4.appendChild(eb);
    colTd4.appendChild(sb);
    colTd5.appendChild(db);
    colTd5.appendChild(cb);
    var tr = document.createElement("tr");
    tr.appendChild(colTd1);
    tr.appendChild(colTd2);
    tr.appendChild(colTd3);
    tr.appendChild(colTd4);
    tr.appendChild(colTd5);
    tableform.appendChild(tr);
    eb.setAttribute("onclick", "editData(this)");
    sb.setAttribute("onclick", "saveData(this)");
    db.setAttribute("onclick", "deletData(this)");
    cb.setAttribute("onclick", "cancelData(this)");
    eb.className = "btnShow";
    sb.className = "btnHide";
    db.className = "btnShow";
    cb.className = "btnHide";

    clearForm();
}

function deletData(dr) {
    dr.parentNode.parentNode.remove();
    var tableform = document.getElementById("tableForm");
    var trLength = tableform.getElementsByTagName("tr");
    for (var i = 1; i < trLength.length; i++) {
        trLength[i].firstChild.innerHTML = i;
    }
    var cn = dr.parentNode.childNodes;

    for(var i = 0; i < cn.length; i++){
        if(cn[i].innerHTML == "Delete"){
            cn[i].classList.remove("btnShow");
            cn[i].classList.add("btnHide");
        }
        else if(cn[i].innerHTML == "Cancel"){
            cn[i].classList.add("btnShow");
            cn[i].classList.remove("btnHide");
        }
    }
}

var nameEdit = "";
var classEdit = "";

function editData(er) {
    var erNameValue = er.parentNode.previousSibling.previousSibling;
    nameEdit = erNameValue.innerHTML;
    var erPreNameValue = erNameValue.innerHTML;
    var inputName = "<input type='text'>";
    erNameValue.innerHTML = inputName;
    erNameValue.firstChild.value = erPreNameValue;

    var erClassValue = er.parentNode.previousSibling;
    classEdit = erClassValue.innerHTML;
    var erPreClassValue = erClassValue.innerHTML;
    erClassValue.innerHTML = inputName;
    erClassValue.firstChild.value = erPreClassValue;
    
    var cn = er.parentNode.childNodes;

    for(var i = 0; i < cn.length; i++){
        if(cn[i].innerHTML == "Edit"){
            cn[i].classList.remove("btnShow");
            cn[i].classList.add("btnHide");
        }
        else if(cn[i].innerHTML == "Save"){
            cn[i].classList.add("btnShow");
            cn[i].classList.remove("btnHide");
        }
    }
    var erCN = er.parentNode.nextSibling.childNodes;

    for(var i = 0; i < erCN.length; i++){
        if(erCN[i].innerHTML == "Delete"){
            erCN[i].classList.remove("btnShow");
            erCN[i].classList.add("btnHide");
        }
        else if(erCN[i].innerHTML == "Cancel"){
            erCN[i].classList.add("btnShow");
            erCN[i].classList.remove("btnHide");
        }
    }

}

function saveData(sr) {
    var srNameValue = sr.parentNode.previousSibling.previousSibling.firstChild;
    sr.parentNode.previousSibling.previousSibling.innerHTML = srNameValue.value;
    var srClassValue = sr.parentNode.previousSibling.firstChild;
    sr.parentNode.previousSibling.innerHTML = srClassValue.value;

    var cn = sr.parentNode.childNodes;

    for(var i = 0; i < cn.length; i++){
        if(cn[i].innerHTML == "Save"){
            cn[i].classList.remove("btnShow");
            cn[i].classList.add("btnHide");

        }
        else if(cn[i].innerHTML == "Edit"){
            cn[i].classList.add("btnShow");
            cn[i].classList.remove("btnHide");

        }
    }

    var srCN = sr.parentNode.nextSibling.childNodes;

    for(var i = 0; i < srCN.length; i++){
        if(srCN[i].innerHTML == "Cancel"){
            srCN[i].classList.remove("btnShow");
            srCN[i].classList.add("btnHide");
        }
        else if(srCN[i].innerHTML == "Delete"){
            srCN[i].classList.add("btnShow");
            srCN[i].classList.remove("btnHide");
        }
    }
}

function cancelData(cr){
    cr.parentNode.parentNode.childNodes[1].innerHTML = nameEdit;
    cr.parentNode.parentNode.childNodes[2].innerHTML = classEdit;


    var cn = cr.parentNode.childNodes;

    for(var i = 0; i < cn.length; i++){
        if(cn[i].innerHTML == "Cancel"){
            cn[i].classList.remove("btnShow");
            cn[i].classList.add("btnHide");
        }
        else if(cn[i].innerHTML == "Delete"){
            cn[i].classList.add("btnShow");
            cn[i].classList.remove("btnHide");
        }
    }
    var crCN = cr.parentNode.previousSibling.childNodes;

    for(var i = 0; crCN.length; i++){
        if(crCN[i].innerHTML == "Save"){
            crCN[i].classList.remove("btnShow");
            crCN[i].classList.add("btnHide")
        }
        else if(crCN[i].innerHTML == "Edit"){
            crCN[i].classList.add("btnShow");
            crCN[i].classList.remove("btnHide");
        }
    }
}

function clearForm() {
    var sName = document.getElementById("s-name");
    var sClass = document.getElementById("s-class");
    sName.value = "";
    sClass.value = "";
}


//       **~** Chapter # 52 to 57 Excercise # 1, 2, 3, 4, 5 & 6 **~**

var images = ["images/4.png", "images/6.jpg", "images/7.png", "images/9.jpg", "images/10.jpg"];

var pics = document.getElementById("pics");
for (var i = 0; i < images.length; i++) {
    pics.innerHTML += "<img src='" + images[i] + "'>";
    var imgTg = pics.getElementsByTagName("img");
    var pathImg = "'" + images[i] + "'";
    imgTg[i].setAttribute("onclick", "expandImage(" + pathImg + ")");
}

function expandImage(p) {
    var modal = document.getElementById("modal");
    modal.getElementsByTagName("img")[0].src = p;
    modal.classList.add("modal-open");
    modal.classList.remove("modal-close");
}


function onClosedImagModal() {
    var modal = document.getElementById("modal");
    modal.classList.add("modal-close");
    modal.classList.remove("modal-open");
    setTimeout(function () { modal.style.display = "none"; }, 550);
}


//       **~** Chapter # 58 to 67 Excercise # 1 **~**

var mainContent = document.getElementById("main-content");

document.write("<h4>(ii)</h4>");
for (var i = 0; i < mainContent.childNodes.length; i++) {
    var mainChild = mainContent.childNodes[i];
    document.write(mainChild + "<br>");
}

var renderClass = document.getElementsByClassName("render");
document.write("<h4>(iii)</h4>");
for (var i = 0; i < renderClass.length; i++) {
    document.write(renderClass[i].innerHTML + "<br>");
}

var fName = document.getElementById("first-name");
fName.value = "Kousar";
var lName = document.getElementById("last-name");
lName.value = "Parveen";
var contEmail = document.getElementById("email");
contEmail.value = "abc@example.com";


//       **~** Chapter # 58 to 67 Excercise # 2 **~**

var formContent = document.getElementById("form-content");
document.write("<h4>(i)</h4>");
document.write(formContent.nodeType);

var lastName = document.getElementById("lastName");
document.write("<h4>(ii)</h4>");
document.write(lastName.nodeType + "<br>");
document.write(lastName.childNodes[0]);

lastName.childNodes[0].nodeValue = "Last Name: Mark";

document.write("<h4>(iv)</h4>");
document.write(mainContent.firstChild.innerHTML + "<br>");
document.write(mainContent.lastChild.innerHTML + "<br>");

document.write("<h4>(v)</h4>");
document.write(lastName.nextSibling.innerHTML + "<br>");
document.write(lastName.previousSibling.innerHTML + "<br>");

document.write("<h4>(vi)</h4>");
document.write(contEmail.parentNode + "<br>");
document.write(contEmail.nodeType);















