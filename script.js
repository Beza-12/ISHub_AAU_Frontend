
const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// your code
function calculate(){
    const cur1=currency_one.value;
    const cur2=currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${cur1}`)
    .then(response=>response.json())
    .then(Data=>{
        const rate=Data.rates[cur2]
        rateEl.innerText=`1 ${cur1} = ${rate} ${cur2}`;
        amount_two.value=(amount_one.value*rate).toFixed(2);    
        
    })
    .catch(() => {
      rateEl.innerText = "Error fetching data!";
    });
}



// Event listeners
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);

swap.addEventListener('click', () =>{
  const temp = currency_one.value;
  currency_one.value = currency_two.value;
  currency_two.value = temp;
  calculate();
});


 calculate();
