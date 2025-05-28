//1.Create a variable of type string and try to add a number to it. 
// let myString = "Hello ";
// let myNumber = 5;

// let result = myString + myNumber;

// console.log(result); 
// document.getElementById('output').innerHTML="The answer is :"+result;

//2. Use typeof operator to find the datatype of the string in last question.
// let mystring="jishan";
// let mynumber=5;
// let result=mystring+mynumber;
// console.log(result);
// console.log(typeof result);
// document.getElementById('output').innerHTML="The is type:"+typeof result;

 // 3.Write a javascript Program to two variable addition, subtraction, multiplication, division .(compulsory user input)
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
 
// let sum = parseInt(num1) + parseInt(num2);
// let difference = parseInt(num1) - parseInt(num2);
// let product = parseInt(num1) * parseInt(num2);
// let quotient = parseInt(num1) / parseInt(num2);

// console.log("Addition"+sum);
// console.log("Subtraction"+difference);
// console.log("Multiplication"+product);
// console.log("Division"+quotient);

// document.getElementById('output').innerHTML = 
//     "Addition: " + sum + "<br>" +
//     "Subtraction: " + difference + "<br>" +
//     "Multiplication: " + product + "<br>" +
//     "Division: " + quotient;

// 4.Write a javascript Program to perform a swapping of two 
// variables.(compulsory user input)
// let a = prompt("Enter the first number:");
// let b = prompt("Enter the second number:");

// console.log("Before swapping: ", a,b);
// let c=0;
// c=a;
// a=b;
// b=c;

// console.log("After swapping: a:"+a,"b:"+b);
// document.getElementById('output').innerHTML =
// "A =:"+ a +"<br>"+
// "B =:"+ b;

//5. Write a javascript program to convert temperature from degree Celsius to Fahrenheit.(compulsory user input)

// let c = prompt("Enter the temperature in degree Celsius:");
//  c=parseFloat(c);
//  let f = (c * 9/5 )+ 32;
//  console.log("Temperature in Fahrenheit is: "+f);
// document.getElementById('output').innerHTML=
// "Temperature in Celsius:"+c+"<br>"+
// "Temperature in Fahrenheit:"+f;


//6. Write a javascript Program to find gross salary.(compulsory user input)
//Ex. Base Salary: 100 RS, HRA=10%, DA=5%, TA=8%.
// let baseSalary = Number (prompt("Enter the base salary:"));
// let hra = Number( prompt("Enter the HRA percentage:"));
// let da =  Number(prompt("Enter the DA percentage:"));  
// let ta =Number( prompt("Enter the TA percentage:")); 

// console.log("basesalary",baseSalary);
// console.log("hra",hra);
// console.log("da",da);
// console.log("ta",ta);

// hra =(baseSalary)/100*hra;
// da =(baseSalary)/100*da;
// ta =(baseSalary)/100*ta;

// let grossSalary = baseSalary + hra + da + ta;

// console.log("Gross Salary: "+grossSalary);
// document.getElementById('output').innerHTML="GrossSalary is:"+grossSalary;
 
//7.Write a javascript Program to find circle area.(compulsory user input)(formula  3.14 * r * r)
// let r = Number(prompt("Enter the radius of the circle:"));
// let area = 3.14 * r * r;
// console.log("Area of the circle is: "+area);
// document.getElementById('output').innerHTML="Area of the circle is:"+area;

//8. Write a javascript Program to find triangle area.(compulsory user input)(formula  0.5 * b * h)
// let b = Number(prompt("Enter the base of the triangle:"));
// let h= Number(prompt("Enter the height of the triangle:"));
// let area =0.5*b*h;
// console.log("Area of the triangle is: "+area);
// document.getElementById("output").innerHTML="Area of the triangle is:"+area;

//9. Write a javascript Program to find  rate of interest.(compulsory user input)(p * r  * n / 100)
// let principle = Number(prompt("Enter the principal amount:"));
// let rate = Number(prompt("Enter the rate of interest:"));
// let time = Number(prompt("Enter the time period:"));

// let interest=(principle+rate+time)/100;
// console.log("Rate of interest is: "+interest);
// document.getElementById('output').innerHTML="Rate of interest is:"+interest;

//10.Use ternary Opratore and make a program to check the age to determine the eligibility to vote.
let age = Number(prompt("Enter your age:"));
let message= (age>=18)?"you can vote":"you can't vote";
console.log(message);
document.getElementById('output').innerHTML=message;


