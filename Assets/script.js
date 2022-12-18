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

},  {   Question : "How do you make commends in JavaScript?", 
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
var themeSwitcher = document.querySelector(".button");

function showQuestion() {
    let questionEl = document.querySelector(".questions");

    questionEl.textContent = " seconds  till holaa ..";
    //document.getElementById("button").style.display = "block";
    document.getElementById("buttonID").style.display = 'none';
    document.getElementsByClassName("choices")[0].style.display = 'block';
    document.getElementsByClassName("choices")[1].style.display = 'block';
    document.getElementsByClassName("choices")[2].style.display = 'block';
    document.getElementsByClassName("choices")[3].style.display = 'block';

}
themeSwitcher.addEventListener("click", showQuestion);

