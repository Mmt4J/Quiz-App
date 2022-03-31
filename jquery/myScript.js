const quiz = [
    {
        question: 'How old is Olusegun Obasanjo',
        option: ['78',
                '45',
                '12',
                'None of the above'],
        Ans: '3'
    }, {
        question: 'The chief executive officer of facebook is ',
        option: ['Mark Zuckerberg',
                'Bamidele Ayodele',
                'Alabi Matthew Ayodele',
                'None of the above'],
        Ans: '0'
    },{
        question: "The world's largest personal-computer software company is",
        option: ['Microsoft Corporation',
                'Facebook',
                'Twitter+',
                'None of the above'],
        Ans: '0'
    },{
        question: 'Ajegunle is found in',
        option: ['Osogbo',
                'Lagos',
                'Option A & B',
                'None of the above'],
        Ans: '2'
    },{
        question: 'Lagos and Osogbo is a State in which country?',
        option: ['Coasterica',
                'Ogun State',
                'Nigeria',
                'Brazil'],
        Ans: '2'
    },{
        question: 'What is the most used programming language in 2019?',
        option:[ 'Java',
                'JavaScript',
                'C++',
                'Python'],
        Ans: '1'
    },{
        question: 'One of the easy to learn language in 2022 is',
        option:[ 'Django',
                'python',
                'java',
                'Laravel'],
        Ans: '1'
    },{
        question: 'Numbers of the Universities in Nigeria as of 2021 is',
        option:[ '170',
                '250',
                '300',
                '190'],
        Ans: '0'
    },{
        question: 'Obafemi Awolowo University is a University in',
        option:[ 'USA',
                'Nigeria',
                'South Africa',
                'Togo'],
        Ans: '1'
    },{
        question: 'Nigeria Federal Capital territory is',
        option:[ 'Abuja',
                'Lagos',
                'Enugu',
                'Ibadan'],
        Ans: '0'
    },{
        question: 'What does HTML stands for?',
        option:[ 'Hypertex Markup Language',
                'Hypertex Mockup Laugage',
                'Havel Modules Laguva',
                'None of the above'],
        Ans: '0'
    }
];

let attempt = 0;
let index = 0;
let score = 0;
let wrong = 0;
let questions = quiz.sort(function (){
    return 0.5 - Math.random();
});

let Tq = questions.length;

$(function (){
   //Timer code start from here and 
    let totalTime = 180;
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function tik(){

        counter++;
        min = Math.floor((totalTime - counter) / 60); // Calculate min
        sec = totalTime - (min * 60) - counter;
        
        $(".timerBox span").text(min + ":" + sec);

        if(counter == totalTime) {
            alert("Times up, cklick the ok button to show the result.");
            result();
            clearInterval(timer);
        }
        
    }, 1000); //timer set for 1 seconds interval
   //Timer code Ends here


   //Print questions
   printQuestions(index);
});

//function to print questions
function printQuestions(i){
    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}

//Function to check for answer
function checkAnswer(option){
    attempt++;

    let optionClicked = $(option).data("opt");// get the value of the option clicked

    if (optionClicked == questions[index].Ans) {
        $(option).addClass("right");
        score++;
    }else{
        $(option).addClass("wrong");
        wrong++;
    }
    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick", "");// Remove the multiselect
}

//Function for the next questions
function showNext(){
    if(index >= questions.length - 1 ){
        showResult(0);
        return;
    }
    index++;
    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick", "checkAnswer(this)");
    printQuestions(index);
}

//Function to shoe the result
function showResult(j){

    if(j == 1 && index < questions.length -1 && !confirm("quiz is not finished yet. Press ok to skip quiz and get  you final result.")){
        return;
    }
   result();
}

function result(){
    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#TotalQuestion").text(Tq);
    $("#attemptQuestions").text(score + wrong);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}