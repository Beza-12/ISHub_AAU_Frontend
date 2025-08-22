const form = document.querySelector(".quiz-form");
const questions =  document.querySelectorAll(".question");
const result = document.querySelector(".result");
const correctAnswers = ['D','B','C','B','D'];
  

// Timer , ADDITIONAL FEATURE ADDED
let timeLeft = 30;
const timerDisplay = document.getElementById("timer");

const timer = setInterval(() => {
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    timeLeft--;//setinterval function is called every second so time less by 1 sec..

    if(timeLeft < 0){
        clearInterval(timer); // stop timer
        form.submit(); // automatically submit quiz...or like restart counting timer...after submiting the former form
    }
}, 1000);//1000ms = 1sec

form.addEventListener('submit', (e) =>{
    // Your code

    e.preventDefault();//prevent default refreshing..
    let score = 0;
    questions.forEach((currentQ ,index) => {// it loop through each question
        const selected=currentQ.querySelector("input[type='radio']:checked");//check the current questions checked radio button
        if(selected.value===correctAnswers[index]){//compare the value of selected with correct one...
            score++;
            currentQ.style.backgroundColor = 'green';
        }else{
            currentQ.style.backgroundColor = 'red';
        }
    });
let score_message = document.querySelector(".result p:first-child");
    score_message.textContent = `Your score is ${score} out of ${questions.length}`;//result shown
     result.classList.remove("hide");//to make visisble the result
});