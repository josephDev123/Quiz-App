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


start_btn.onclick=()=>{
    start_btn.remove();
   rule.classList.add('addopacity');

   exit_btn.onclick = ()=>{
    location.reload();
   }

   continue_btn.onclick=()=>{
        showQuestion(0);
        // startTime(15);
        // numberQuestion(1);

   }


}


function  showQuestion(index){
    // remove the rules container
    rule.remove();
    //make the quiz box visible
    quiz_container.classList.add('addopacity');
    //question 
    let questionHeading =   `<h3 class="question_heading" id="question_heading">  <span>${questions[index].numb}.</span>${questions[index].question}</h3>`;
    quiz_question.innerHTML = questionHeading;
    //question option
    let options = questions[index].options.length;
    questions[index].options.forEach(item =>{
            let optionElement = ` <div class="question_options" id="question_options">
            <div class="option" id="option">${item}</div>
            <div class="tickCross_wrapper">
                <span class="tickIcon" id="tickIcon"><i class="fas fa-check-circle" style="font-size: 20px;"></i></span>
                <span class="crossIcon" id="crossIcon"><i class="far fa-times-circle" style="font-size: 20px;"></i></span>
            </div>
        </div>`
        question_option_wrapper.insertAdjacentHTML("afterbegin",  optionElement);
    })
  
    
}