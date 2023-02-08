function mon(){
    let inputTxt = document.getElementById("in").value;
    let result ="";
    const str = "f22ba027";
    if (inputTxt == str){
        result = "正解";
    }else{
        result ="不正解";
    }
    document.getElementById("out").value = result;

}

function asrQuiz1() {
        let quiz_1 = document.getElementById('quiz-1');
        result1 = "";
        if (quiz_1.answer.value == 'a') {
            result1 ="不正解";
          } else if (quiz_1.answer.value == 'b') {
            result1 = "正解";
          } else if (quiz_1.answer.value == 'c') {
            result1 ="不正解";
          }
          document.getElementById("out1").value = result1;
}
function asrQuiz2() {
    let quiz_2 = document.getElementById('quiz-2');
    result2 = "";
    if (quiz_2.answer.value == 'a') {
        result2 ="不正解";
      } else if (quiz_2.answer.value == 'b') {
        result2 = "不正解";
      } else if (quiz_2.answer.value == 'c') {
        result2 ="正解";
      }
      document.getElementById("out2").value = result2;
}
function asrQuiz3() {
    let quiz_3 = document.getElementById('quiz-3');
    result3 = "";
    if (quiz_3.answer.value == 'a') {
        result3 ="正解";
      } else if (quiz_3.answer.value == 'b') {
        result3 = "不正解";
      } else if (quiz_3.answer.value == 'c') {
        result3 ="不正解";
      }
      document.getElementById("out3").value = result3;
}