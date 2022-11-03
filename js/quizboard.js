const quizAnswers = document.querySelectorAll(".ouranswers");
const submitAnswer = document.querySelector("#submit_ans");
let marks = 0;
let total = 0;
quizAnswers.forEach(function (jibu) {
    jibu.addEventListener("change", function (event) {
        marks += parseInt(event.target.value);

        //alert("Selected");
    });
});
submitAnswer.addEventListener("click", function (event) {
    alert("your score is " + marks);

});