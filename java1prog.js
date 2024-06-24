let a=5;
let b=10;
console.log(typeof(a+b));
const item={
    "harry":true,
    "shubh":false,
    "lovish":67,
    "rohan":undefined
}
console.log(item["harry"])
let s ="kavya";
let c=7;
console.log(s+c);
console.log(typeof(s+c));
console.log(2**4);//power operator//to take input during execution
let d=10;
console.log(d);
if(d>0)
{
    console.log("positive");
}
let e=20;
console.log(e)
//video 8
//use logical operator to find whw=ether the age is between 10 to 20?
let age = 20;
if(age>10 &&age<18)
{
    console.log("teenager")
}
else if(age>0 && age<10)
{
    console.log("younger");
}
else if(age>=18 && age<60)
{
    console.log("adult");
}
else if(age>60 && age<100)
{
    console.log("older");
}
else{
    console.log("invalid age");
}
let a1=10;
let a2=15;
let a3=29;
let a4=10;
let a5=10;
function mean()
{
    let avg;
    avg=(a1+a2+a3+a4+a5)/5;
    console.log(avg);
}
mean();
mean();