document.addEventListener('DOMContentLoaded', function () {
  function totalScore() {
    let score = 0;
    const submit = document.querySelector('#submit-button');
    submit.addEventListener('click', function () {
      score = 0;

      const questionOne = document.querySelector('input[name="a"]:checked');
      if (questionOne && questionOne.value === 'Paris') {
        score++;
      }

      const questionTwo = document.querySelector('input[name="b"]:checked');
      if (questionTwo && questionTwo.value === 'Mars') {
        score++;
      }

      const questionThree = document.querySelector('input[name="c"]:checked');
      if (questionThree && questionThree.value === 'William Shakespeare') {
        score++;
      }

      const questionFour = document.querySelector('input[name="d"]:checked');
      if (questionFour && questionFour.value === 'Pacific Ocean') {
        score++;
      }

      const questionFive = document.querySelector('input[name="e"]:checked');
      if (questionFive && questionFive.value === 'Leonardo da Vinci') {
        score++;
      }

      const questionSix = document.querySelector('input[name="f"]:checked');
      if (questionSix && questionSix.value === 'JavaScript') {
        score++;
      }

      const finalScore = document.querySelector('.score');
      if (finalScore) {
        finalScore.textContent = `Your total score is ${score}`;
      }

      console.log(`Score: ${score}`);
    });
  }
  totalScore();
});

