
const firstCurrency = document.getElementById("first-cur");
const secondCurrency = document.getElementById("second-cur");


const amount = document.getElementById("amount");
const result = document.getElementById("output");
const url = 'https://v6.exchangerate-api.com/v6/0265b98fdb7079c748595f24/latest/';

function Calculate(){
      const currencyOne= firstCurrency.value; 
      const currencyTwo = secondCurrency.value;
      const amountt = amount.value;

     
      fetch(url + currencyOne) 
    .then((res) => res.json())
     .then((data) =>{
        
      function rate( k){
        var value=data.conversion_rates[k];
        return value;
      };
       
      const output =(amountt*rate(currencyTwo)).toFixed(4);
     
      document.getElementsByName('display')[0].value= output;   

       document.getElementById("rateshow1").innerText=`1 ${currencyOne} = ${rate(currencyTwo).toFixed(4)} ${currencyTwo}`;
       document.getElementById("rateshow2").innerText=`1 ${currency2} = ${rate(currency3).toFixed(4)} ${currency3}`;
       document.getElementById("rateshow3").innerText=`1 ${currency2} = ${rate(currency5).toFixed(4)} ${currency5}`;
       document.getElementById("rateshow4").innerText=`1 ${currency6} = ${rate(currency3).toFixed(4)} ${currency3}`;

    
     });



     
    
};




var today= new Date();

var day = today.getDate();
var month = today.toLocaleString('default', { month: 'long' });

var year= today.getFullYear();

var hour= today.getHours();
var minute= today.getMinutes();




document.getElementById("date-").innerHTML=month +" "+ day +", "+year;

document.getElementById("-time").innerHTML=hour +":"+ minute+ " "+ "IST" ;

function Swap(){
    const Temp= firstCurrency.value;
      firstCurrency.value = secondCurrency.value;
      secondCurrency.value= Temp;
      Calculate();
}





document.getElementById("swap").addEventListener("click",Swap);

firstCurrency.addEventListener("change" ,Calculate);
secondCurrency.addEventListener("change" ,Calculate);

amount.addEventListener("input", Calculate);