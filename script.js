function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); 
fibonacci=(n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(5));     
function isPrime(num) {
    if (num <= 1)
         return false;
        else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) 
                    return false; 
             }
    return true;
}  
}   
console.log(isPrime(4));     



let x=89 ,y= 34;
const average = (x, y) => {
    return (x + y) / 2;
}
console.log(average(x,y));

 factorial=(n) =>{
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6)); 



isPrime = function (num) {
    if (num <= 1)
         return false;
        else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) 
                    return false; 
             }
    return true;
}  
} 
console.log(isPrime(10));

//ARRAY OPERATIONS

let myarray= [1, 4, 3, 2, 12,5];
myarray.forEach(function(element){
    console.log(element);
});
myarray.map(function(element){
    console.log(element * element);
})

const odd = myarray.filter(function(element){
    
   // console.log(element % 2 != 0);this give true or false ,,so?
    return element % 2 != 0;
});
console.log(odd);


const sum = myarray.reduce(function(total, element ){
  return total + element;
}, 0);
console.log(sum);


const aboveTen = myarray.find(function(element) {
  return element> 10;
});

console.log(aboveTen); 


const EvenIndex = myarray.findIndex(function(element) {
  return element % 2 == 0;
});
console.log(EvenIndex); 


const three = myarray.includes(3);
console.log(three); 

const firstThree = myarray.slice(0, 3);
console.log(firstThree); 


myarray.splice(myarray.length - 1, 1, 10);
console.log(myarray); 


myarray.sort(function(a, b) {
  return a - b;
});
console.log(myarray); 


const joined = myarray.join(", ");
console.log(joined);
