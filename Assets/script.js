let question = [
    {
        Question : "Which tag is used to link a JavaScript file to HTML files?",
        choiceA : "<script>",
        choiceB : "<javascript>",
        choiceC : "<JS>",
        choiceD : "<style>",
        correct : "A"

},  {   Question : "Where should your JavaScript file be linked in HTML?",
        choiceA : "Inside the <head> element",
        choiceB : "Above the closing </body> tag",
        choiceC : "After the closing </html> tag",
        choiceD : "Between the closing </head> and the opening <body> tags",
        correct : "B"

},  {   Question : "How do you make comments in JavaScript?", 
        choiceA : "# Comment", 
        choiceB : "<!  Comment -- >",
        choiceC : "// Comment",
        choiceD : "/* Comment",
        correct : "C"

},  {   Question : "What operator is used to assign a variable in JavaScript?",
        choiceA : "=", 
        choiceB : "<",
        choiceC : "==",
        choiceD : "!=",
        correct : "A"

},  {   Question : "How do you create an array in JavaScript?",
        choiceA : "var fruit = apple, pear, banana", 
        choiceB : "var fruit = [apple, pear, banana]",
        choiceC : "var fruit = “apple”, “pear”, “banana”",
        choiceD : "var fruit = [“apple”, “pear”, “banana”]",
        correct : "D"
}];

let listquestions = ["Which tag is used to link a JavaScript file to HTML files?","Where should your JavaScript file be linked in HTML?",
"How do you make comments in JavaScript?","What operator is used to assign a variable in JavaScript?",
"How do you create an array in JavaScript?"];

let answers0 = [' < script > ','< javascript >','< JS >','< style >'];
let answers1 = ["Inside the < head > element","Above the closing < / body > tag","After the closing </ html > tag","Between the closing </ head > and the opening < body > tags"];
let answers2 = ["# Comment","<!  Comment -- >","// Comment","/* Comment"];
let answers3 = ["=", "<", "==","!=","A",];
let answers4 = ["var fruit = apple, pear, banana","var fruit = [apple, pear, banana]", "var fruit = “apple”, “pear”, “banana”", "var fruit = [“apple”, “pear”, “banana”]"];
let answer= "";
//Buttons
let startQuiz = document.querySelector(".button");
let choice0 = document.querySelector(".choices");
let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");


let numberquestion =0;

function aver()
{
    checkAnswers(0,0);
}
function checkAnswers(question, choice)
{
    let answerEl = document.querySelector("#answer");
    let answer="";
    if (question===0){
        if (choice===0){
            console.log("Correct");
            answer = "Correct";}
        else{
            console.log("Wrong");

            answer =  "Wrong";}
    }
    else if (question ===1){
        if (choice===1){
            console.log("Correct");
            answer =  "Correct";}
        else{answer =  "Wrong";}
    }
    else if (question ===2){
        if (choice===2){answer =  "Correct";}
        else{answer =  "Wrong";}
    }
    else if (question ===3){
        if (choice===3){answer =  "Correct";}
        else{answer =  "Wrong";}
    }
    answerEl.textContent = answer;
}
function answersLists(x){

    console.log("The x value " + x);
    if (x===0){
        console.log("list 0 ");
        return answers0;
    }
    else if (x===1) {
        console.log("list 1 ");
        return answers1;
    }
    else if (x===2) {
        console.log("list 2 ");
        return answers2;}
    else if (x===3) {
        console.log("list 3 ");
        return answers3;}
    else if (x===4) {
        console.log("list 4 ");
        return answers4;}
    else  {
        console.log("EEEEpa ");
    }

}
function questionandAnswer(){
    
    let questionEl = document.querySelector(".questions");
    console.log(answers0[0]);
    questionEl.textContent = listquestions[numberquestion];
    //document.getElementById("button").style.display = "block";
    document.getElementById("buttonID").style.display = 'none';
    document.getElementsByClassName("choices")[0].style.display = 'block';
    var button1 =  document.getElementsByClassName("choices")[0];
    button1.innerHTML = (answersLists(numberquestion))[0];

    document.getElementsByClassName("choices")[1].style.display = 'block';
    document.getElementsByClassName("choices")[1].innerHTML = (answersLists(numberquestion))[1];
    
    console.log("segundo elemento "+ answersLists(numberquestion));
    document.getElementsByClassName("choices")[2].style.display = 'block';
    document.getElementsByClassName("choices")[2].innerHTML = answersLists(numberquestion)[2];

    document.getElementsByClassName("choices")[3].style.display = 'block';
    document.getElementsByClassName("choices")[3].innerHTML = answersLists(numberquestion)[3];
    



}

startQuiz.addEventListener("click", questionandAnswer);


choice0.addEventListener("click", function(){
    checkAnswers(numberquestion,0) 
});
choice1.addEventListener("click", function(){
    checkAnswers(numberquestion,1) 
});
choice2.addEventListener("click", function(){
    checkAnswers(numberquestion,2) 
});
choice3.addEventListener("click", function(){
    checkAnswers(numberquestion,3) 
});
