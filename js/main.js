'use strict';
const start_btn = document.getElementById('start');
const rule = document.getElementById('rules');
const quiz_container =document.getElementById('quiz_container');
const time_left_text = document.getElementById('time_left_text');
const time = document.getElementById('time');
const quiz_question = document.getElementById('quiz_question');
const question_option_wrapper = document.getElementById('question_option_wrapper');
const footer = document.getElementById('footer');
const question_count = document.getElementById('question_count');
const next_btn = document.getElementById('next_btn');
const result_container = document.getElementById('result_container');
const footer_replay_quit =document.getElementById('footer_replay_quit');
const replay_btn = document.getElementById('replay_btn');
const end_quit_btn = document.getElementById('quit_btn');
const exit_btn = document.getElementById('exit_btn');
const continue_btn = document.getElementById('continue_btn');
let Time = 60;
let question_index = 0;
let correct_answer_count = 0;
let question_show =1

start_btn.onclick=()=>{
    start_btn.remove();
   rule.classList.add('addopacity');

   exit_btn.onclick = ()=>{
    location.reload();
   }

   continue_btn.onclick=()=>{
        showQuestion(question_index);
        startTime(15);
        // numberQuestion(1);

   }


}


function  showQuestion(question_index){
    // remove the rules container
    rule.remove();
    //make the quiz box visible
    quiz_container.classList.add('addopacity');
    //question 
    let questionHeading =   `<h3 class="question_heading" id="question_heading">  <span>${questions[question_index].numb}.</span>${questions[question_index].question}</h3>`;
    quiz_question.innerHTML = questionHeading;
    //question option
    let options = questions[question_index].options.length;
    questions[question_index].options.forEach(item =>{
            let optionElement = ` <div class="question_options" id="question_options">
            <div class="option" id="option">${item}</div>
            <div class="tickCross_wrapper">
                
            </div>
        </div>`
        question_option_wrapper.insertAdjacentHTML("afterbegin",  optionElement);
    })
//   next_btn.setAttribute('style', 'opacity:1;');
   let  question_option = document.querySelectorAll('.option');
   question_option.forEach(item =>{
    item.onclick = checkAnswer;
       
   })

    question_count.textContent =`${question_show} out of ${questions.length}`;
}


function  checkAnswer(){
    //correct answer
    let correctAns = questions[question_index].answer;

    if(this.textContent == correctAns){
        this.nextElementSibling.innerHTML = `<span class="tickIcon" id="tickIcon"><i class="fas fa-check-circle" style="font-size: 20px;"></i></span>`;
        let  question_option = document.querySelectorAll('.option');
        question_option.forEach(item =>{
         //    item.onclick = checkAnswer;
         item.style.cssText ="opacity: 0.6;color: currentColor;cursor: not-allowed; pointer-events:none";    
        })
        correct_answer_count++;
    }else if(this.textContent != correctAns){
        this.nextElementSibling.innerHTML = `<span class="crossIcon" id="crossIcon"><i class="far fa-times-circle" style="font-size: 20px;"></i></span>`;
        let  question_option = document.querySelectorAll('.option');
        question_option.forEach(item =>{
         //    item.onclick = checkAnswer;
         item.style.cssText ="opacity: 0.6;color: currentColor;cursor: not-allowed; pointer-events:none";    
        })
        // when users choose the wrong answer, show them the right answer
        question_option.forEach(item =>{
            if (item.textContent == correctAns) {
                item.nextElementSibling.innerHTML = `<span class="tickIcon" id="tickIcon"><i class="fas fa-check-circle" style="font-size: 20px;"></i></span>`;
            }
          
               
           })
    }

    next_btn.style.opacity =1;

}


//timer countdown
function startTime(sec){
   sec = Time;
 
   let setTimer = setInterval(()=>{
    --sec;
    time.textContent = `: ${sec}`;
  
    if(sec == 0){
        quiz_container.remove(); 
        result_container.setAttribute('style', 'opacity:1;');
       }

   }, 1000)
  
   
  
}

//next question button click
next_btn.onclick =()=>{
    question_index++;
    question_show++;
    showQuestion(question_index);
    // startTime(15);
}






//<span class="tickIcon" id="tickIcon"><i class="fas fa-check-circle" style="font-size: 20px;"></i></span>
//<span class="crossIcon" id="crossIcon"><i class="far fa-times-circle" style="font-size: 20px;"></i></span>