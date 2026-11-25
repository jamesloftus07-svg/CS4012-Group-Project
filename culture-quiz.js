function gradeQuiz() {
    let score = 0;


    let ans1 = document.querySelector('input[name="q1"]:checked');
    let ans2 = document.querySelector('input[name="q2"]:checked');
    let ans3 = document.querySelector('input[name="q3"]:checked');

    let resultBox = document.getElementById("quiz-result");

    
    if (ans1 === null || ans2 === null || ans3 === null) {
        resultBox.textContent = "Please answer all 3 questions before submitting!";
        resultBox.style.color = "#b30000";
        return;
    }

    
    if (ans1.value === "b") {
        score = score + 1;
    }
    if (ans2.value === "a") {
        score = score + 1;
    }
    if (ans3.value === "b") {
        score = score + 1;
    }

    
    if (score === 3) {
        resultBox.textContent = "You scored 3/3! Parfait, you know your French customs!";
        resultBox.style.color = "#1b6e28";
    } else if (score >= 1) {
        resultBox.textContent = "You scored " + score + "/3. Bien joué, try again for 3/3!";
        resultBox.style.color = "#060a2c";
    } else {
        resultBox.textContent = "You scored 0/3. Have another read above and try again!";
        resultBox.style.color = "#b30000";
    }
}