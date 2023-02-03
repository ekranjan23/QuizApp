const quizDB = [
    {
        question: "Q1: Founder of EdukrOnline.com ?",
        a: "Ranjan Kumar",
        b: "Kumar Ranjan",
        c: "Rakesh mahato",
        d: "Sachin Sony",
        ans: "ans1"
    },

    {
        question: "Q2: TajMahal kisne banaya tha?",
        a: "Salman Khan",
        b: "Karina Kapoor",
        c: "Sunil Harippa",
        d: "Inme se koi nhi",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following is Mahan?",
        a: "Rakesh Bahi",
        b: "Chummeshwari",
        c: "Maheshwari",
        d: "Durgeshwari",
        ans: "ans1"
    },
    {
        question: "Q4: Bharat ki Rajdhani kaha hain?",
        a: "Patna",
        b: "Kolkta",
        c: "Delhi",
        d: "Nagaland",
        ans: "and3"
    },
    {
        question: "Q5: Bihar ka janm kab hua tha?",
        a: "22 March",
        b: "13 March",
        c: "14 March",
        d: "Bahut pahle",
        ans: "ans1"
    }

]

let question = document.querySelector('.que');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let submit = document.querySelector('#submit');
let answers = document.querySelectorAll('.answer');
let showScore = document.querySelector('#showScore');



let questionCount = 0;
let score = 0;
let loadQuestion = () => {

    question.innerHTML = quizDB[questionCount].question;
    option1.innerHTML = quizDB[questionCount].a;
    option2.innerHTML = quizDB[questionCount].b;
    option3.innerHTML = quizDB[questionCount].c;
    option4.innerHTML = quizDB[questionCount].d;
}

loadQuestion();
let getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
}

let deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false
    });
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    }
    questionCount++;

    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `<h3> You scored ${score}/${quizDB.length}</h3>
        <button class = "btn try" onclick = "location.reload()" >Try Again</button>
        `;
        showScore.classList.remove('scoreArea');

    }
})